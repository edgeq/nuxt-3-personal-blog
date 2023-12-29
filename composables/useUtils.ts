export const useUtils = () => {
    const sayHello = () => console.log('HELLO FROM UTILS')
    // with options API, you can log `this` to get the current context
    // with composition API, useNuxtApp is the new `this` or context
    const nuxt = useNuxtApp()

    const logNuxt = () => console.log('Utils:logNuxt', nuxt)

    const onMountedLog = () => (
        logNuxt(),
        sayHello(),
    )


    return {
        sayHello,
        logNuxt,
        onMountedLog,
    }
}