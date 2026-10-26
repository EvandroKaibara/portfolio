import { useLayoutEffect } from 'react'

export const useReveal = () => {
    useLayoutEffect(() => {
        const targets = document.querySelectorAll('main > section:not(#home) > *')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return
                entry.target.setAttribute('data-reveal', 'visible')
                observer.unobserve(entry.target)
            })
        }, { rootMargin: '0px 0px -8% 0px' })

        targets.forEach((target) => {
            target.setAttribute('data-reveal', '')
            observer.observe(target)
        })

        return () => observer.disconnect()
    }, [])
}
