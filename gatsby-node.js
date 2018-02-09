const { Observable } = require('rxjs')
const axios = require(`axios`)
const _ = require(`lodash`)
const crypto = require(`crypto`)
const path = require(`path`)
const slash = require(`slash`)
const slugify = require(`slugify`)

exports.createPages = ({ graphql, boundActionCreators }) => {

    const template = path.resolve(`src/templates/creative-thread-foundation.js`)

    return new Promise((resolve, reject) => {

        const { createPage } = boundActionCreators

        let _siteURL = `https://www.univision.com/test/creative-fondation-datasource`
        let _queryURL = `https://syndicator.univision.com/web-api/content?url=${encodeURI(_siteURL)}%3F_clearView%3Dtrue${1 + Math.random() * 50}`

        let obs = Observable.create(function subscribe(observer) {
            axios({
                method: `get`,
                url: `${_queryURL}`
            }).then(result => {
                if (result.status == 200 && result.data.status ===  'success') {

                    let _entity = result.data.data;
                    let node = {
                        id: _entity.uid,
                        title: _entity.title,
                        publishDate: _entity.publishDate,
                        url: _entity.url,
                        shortTitle: _entity.shortTitle,
                        description: _entity.description,
                        body: JSON.stringify(_entity.body),
                        widgetsJSON: JSON.stringify(_entity.widgets),
                        articles: []
                    }
                    
                    let articles = []
                    
                    _.forEach(_entity.widgets, widget => {
                    
                        _.forEach(widget.contents, content => {
                            if (content.type === "article") articles.push(content)
                        })
                    })
                    _.forEach(articles, (art, idx) => {
                        let _siteURL = `https://www.univision.com/${art.uri}`
                        let _queryURL = `https://syndicator.univision.com/web-api/content?url=${encodeURI(_siteURL)}%3F_clearView%3Dtrue${1 + Math.random() * 50}`
                        console.log({
                            "_queryURL": _queryURL
                        });
                        axios({
                            method: `get`,
                            url: `${_queryURL}`
                        }).then(result => {

                            if (result.status == 200 && result.data.status ===  'success') {
                                node.articles.push(JSON.stringify(result.data.data))
                                
                                if (idx === articles.length - 1) {
                                    observer.next(node) 
                                }
                            } else {
                                reject(result)
                            }
                        })
                    })
                } else {
                    reject(result)
                }
            })

        })
        obs.subscribe(node => {
            resolve(createPage({
                //path: `${ slugify( _.lowerCase( node.title ) ) }`, // required
                path: `/`, // required
                component: slash(template),
                context: {
                    slug: node.id,
                    node: node
                }
            }))
        })        
    })
}

exports.modifyWebpackConfig = ({config, stage}) => {
    config.merge({
      output: {
        //publicPath: '//static.univision.com/creative-thread-foundation/public/',
        //publicPath: '//univision-external-content.s3.amazonaws.com/creative-thread-foundation/public/',
        //publicPath: '//performance.univision.com/creative-thread-foundation/public/',
        //publicPath: '//local.static.univision.com/creative-thread-foundation/public/',
        crossOriginLoading: 'anonymous'
      }
    });
    return config;
}