const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         //set第一个参数：设置的别名，第二个参数：设置的路径
    //         //.set("vue$", "vue/dist/vue.esm.js")
    //         .set('@', resolve('src'))
    //         .set('assets', resolve('./src/assets'))
    //         .set('components', resolve('./src/components'))
    //         .set('common', resolve('./src/common'))
    //         .set('network', resolve('./src/network'))
    //         .set('views', resolve('./src/views'))
    // }
}