document.addEventListener 'DOMContentLoaded', ->

    languages =
        'polish' : 0.95
        'english' : 0.8
        'italian' : 0.85
        'french' : 0.75

    langBars = for lang, proficiency of languages
        bar = new ProgressBar.Circle '#'+lang,
            strokeWidth: 12
            easing: 'easeInOut'
            duration: 1000
            color: '#222'
            trailColor: '#222'
            trailWidth: 4

        bar.animate(proficiency)

    techSkills =
        'html5' : 0.65
        'css3' : 0.65
        'js' : 0.65
        'sass' : 0.6
        'coffee' : 0.55
        'jquery' : 0.6
        'php' : 0.4
        'wordpress' : 0.45
        # 'python' : 0.45
        # 'terminal' : 0.5
        'git' : 0.5
        'gulp' : 0.5


    techBars = for skill, proficiency of techSkills
        bar = new ProgressBar.Circle '#'+skill,
            strokeWidth: 7,
            easing: 'easeInOut',
            duration: 1000,
            color: '#222',
            trailColor: '#ccc',
            trailWidth: 7

        bar.animate(proficiency)
