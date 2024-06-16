export default defineEventHandler((event) => {
    console.log(event)

    return {
        hello: 'edge',
        api: 'works'
    }
})