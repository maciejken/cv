document.addEventListener('DOMContentLoaded', function() {
  var bar, lang, langBars, languages, proficiency, skill, techBars, techSkills;
  languages = {
    'polish': 0.95,
    'english': 0.8,
    'italian': 0.85,
    'french': 0.75
  };
  langBars = (function() {
    var results;
    results = [];
    for (lang in languages) {
      proficiency = languages[lang];
      bar = new ProgressBar.Circle('#' + lang, {
        strokeWidth: 12,
        easing: 'easeInOut',
        duration: 1000,
        color: '#222',
        trailColor: '#222',
        trailWidth: 4
      });
      results.push(bar.animate(proficiency));
    }
    return results;
  })();
  techSkills = {
    'html5': 0.65,
    'css3': 0.65,
    'js': 0.65,
    'sass': 0.6,
    'coffee': 0.55,
    'jquery': 0.6,
    'php': 0.4,
    'wordpress': 0.45,
    'git': 0.5,
    'gulp': 0.5
  };
  return techBars = (function() {
    var results;
    results = [];
    for (skill in techSkills) {
      proficiency = techSkills[skill];
      bar = new ProgressBar.Circle('#' + skill, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1000,
        color: '#222',
        trailColor: '#ccc',
        trailWidth: 7
      });
      results.push(bar.animate(proficiency));
    }
    return results;
  })();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsU0FBQTtBQUUxQyxNQUFBO0VBQUEsU0FBQSxHQUNJO0lBQUEsUUFBQSxFQUFXLElBQVg7SUFDQSxTQUFBLEVBQVksR0FEWjtJQUVBLFNBQUEsRUFBWSxJQUZaO0lBR0EsUUFBQSxFQUFXLElBSFg7O0VBS0osUUFBQTs7QUFBVztTQUFBLGlCQUFBOztNQUNQLEdBQUEsR0FBVSxJQUFBLFdBQVcsQ0FBQyxNQUFaLENBQW1CLEdBQUEsR0FBSSxJQUF2QixFQUNOO1FBQUEsV0FBQSxFQUFhLEVBQWI7UUFDQSxNQUFBLEVBQVEsV0FEUjtRQUVBLFFBQUEsRUFBVSxJQUZWO1FBR0EsS0FBQSxFQUFPLE1BSFA7UUFJQSxVQUFBLEVBQVksTUFKWjtRQUtBLFVBQUEsRUFBWSxDQUxaO09BRE07bUJBUVYsR0FBRyxDQUFDLE9BQUosQ0FBWSxXQUFaO0FBVE87OztFQVdYLFVBQUEsR0FDSTtJQUFBLE9BQUEsRUFBVSxJQUFWO0lBQ0EsTUFBQSxFQUFTLElBRFQ7SUFFQSxJQUFBLEVBQU8sSUFGUDtJQUdBLE1BQUEsRUFBUyxHQUhUO0lBSUEsUUFBQSxFQUFXLElBSlg7SUFLQSxRQUFBLEVBQVcsR0FMWDtJQU1BLEtBQUEsRUFBUSxHQU5SO0lBT0EsV0FBQSxFQUFjLElBUGQ7SUFVQSxLQUFBLEVBQVEsR0FWUjtJQVdBLE1BQUEsRUFBUyxHQVhUOztTQWNKLFFBQUE7O0FBQVc7U0FBQSxtQkFBQTs7TUFDUCxHQUFBLEdBQVUsSUFBQSxXQUFXLENBQUMsTUFBWixDQUFtQixHQUFBLEdBQUksS0FBdkIsRUFDTjtRQUFBLFdBQUEsRUFBYSxDQUFiO1FBQ0EsTUFBQSxFQUFRLFdBRFI7UUFFQSxRQUFBLEVBQVUsSUFGVjtRQUdBLEtBQUEsRUFBTyxNQUhQO1FBSUEsVUFBQSxFQUFZLE1BSlo7UUFLQSxVQUFBLEVBQVksQ0FMWjtPQURNO21CQVFWLEdBQUcsQ0FBQyxPQUFKLENBQVksV0FBWjtBQVRPOzs7QUFsQytCLENBQTlDIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAnRE9NQ29udGVudExvYWRlZCcsIC0+XG5cbiAgICBsYW5ndWFnZXMgPVxuICAgICAgICAncG9saXNoJyA6IDAuOTVcbiAgICAgICAgJ2VuZ2xpc2gnIDogMC44XG4gICAgICAgICdpdGFsaWFuJyA6IDAuODVcbiAgICAgICAgJ2ZyZW5jaCcgOiAwLjc1XG5cbiAgICBsYW5nQmFycyA9IGZvciBsYW5nLCBwcm9maWNpZW5jeSBvZiBsYW5ndWFnZXNcbiAgICAgICAgYmFyID0gbmV3IFByb2dyZXNzQmFyLkNpcmNsZSAnIycrbGFuZyxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxMlxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0J1xuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIGNvbG9yOiAnIzIyMidcbiAgICAgICAgICAgIHRyYWlsQ29sb3I6ICcjMjIyJ1xuICAgICAgICAgICAgdHJhaWxXaWR0aDogNFxuXG4gICAgICAgIGJhci5hbmltYXRlKHByb2ZpY2llbmN5KVxuXG4gICAgdGVjaFNraWxscyA9XG4gICAgICAgICdodG1sNScgOiAwLjY1XG4gICAgICAgICdjc3MzJyA6IDAuNjVcbiAgICAgICAgJ2pzJyA6IDAuNjVcbiAgICAgICAgJ3Nhc3MnIDogMC42XG4gICAgICAgICdjb2ZmZWUnIDogMC41NVxuICAgICAgICAnanF1ZXJ5JyA6IDAuNlxuICAgICAgICAncGhwJyA6IDAuNFxuICAgICAgICAnd29yZHByZXNzJyA6IDAuNDVcbiAgICAgICAgIyAncHl0aG9uJyA6IDAuNDVcbiAgICAgICAgIyAndGVybWluYWwnIDogMC41XG4gICAgICAgICdnaXQnIDogMC41XG4gICAgICAgICdndWxwJyA6IDAuNVxuXG5cbiAgICB0ZWNoQmFycyA9IGZvciBza2lsbCwgcHJvZmljaWVuY3kgb2YgdGVjaFNraWxsc1xuICAgICAgICBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuQ2lyY2xlICcjJytza2lsbCxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiA3LFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgICAgICAgIHRyYWlsQ29sb3I6ICcjY2NjJyxcbiAgICAgICAgICAgIHRyYWlsV2lkdGg6IDdcblxuICAgICAgICBiYXIuYW5pbWF0ZShwcm9maWNpZW5jeSlcbiJdfQ==
