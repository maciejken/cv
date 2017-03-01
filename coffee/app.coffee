document.addEventListener 'DOMContentLoaded', ->

    polish = document.querySelector '#polish'
    plBar = new ProgressBar.Circle(polish, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1000,
        color: '#ddd',
        trailColor: '#ddd',
        trailWidth: 2
        svgStyle: null
    })

    plBar.animate(0.95)

    english = document.querySelector '#english'
    enBar = new ProgressBar.Circle(english, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1000,
        color: '#ddd',
        trailColor: '#ddd',
        trailWidth: 2
        svgStyle: null
    })

    enBar.animate(0.8)

    italian = document.querySelector '#italian'
    itBar = new ProgressBar.Circle(italian, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1000,
        color: '#ddd',
        trailColor: '#ddd',
        trailWidth: 2
        svgStyle: null
    })

    itBar.animate(0.85)

    french = document.querySelector '#french'
    frBar = new ProgressBar.Circle(french, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1000,
        color: '#ddd',
        trailColor: '#ddd',
        trailWidth: 2
        svgStyle: null
    })

    frBar.animate(0.75)
