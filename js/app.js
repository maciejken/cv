document.addEventListener('DOMContentLoaded', function() {
  var bar, lang, langBars, languages, proficiency;
  languages = {
    'polish': 0.95,
    'english': 0.8,
    'italian': 0.85,
    'french': 0.75
  };
  return langBars = (function() {
    var results;
    results = [];
    for (lang in languages) {
      proficiency = languages[lang];
      bar = new ProgressBar.Circle('#' + lang, {
        strokeWidth: 8,
        easing: 'easeInOut',
        duration: 1000,
        color: '#fff',
        trailColor: '#777',
        trailWidth: 12
      });
      results.push(bar.animate(proficiency));
    }
    return results;
  })();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsU0FBQTtBQUUxQyxNQUFBO0VBQUEsU0FBQSxHQUNJO0lBQUEsUUFBQSxFQUFXLElBQVg7SUFDQSxTQUFBLEVBQVksR0FEWjtJQUVBLFNBQUEsRUFBWSxJQUZaO0lBR0EsUUFBQSxFQUFXLElBSFg7O1NBS0osUUFBQTs7QUFBVztTQUFBLGlCQUFBOztNQUNQLEdBQUEsR0FBVSxJQUFBLFdBQVcsQ0FBQyxNQUFaLENBQW1CLEdBQUEsR0FBSSxJQUF2QixFQUNOO1FBQUEsV0FBQSxFQUFhLENBQWI7UUFDQSxNQUFBLEVBQVEsV0FEUjtRQUVBLFFBQUEsRUFBVSxJQUZWO1FBR0EsS0FBQSxFQUFPLE1BSFA7UUFJQSxVQUFBLEVBQVksTUFKWjtRQUtBLFVBQUEsRUFBWSxFQUxaO09BRE07bUJBUVYsR0FBRyxDQUFDLE9BQUosQ0FBWSxXQUFaO0FBVE87OztBQVIrQixDQUE5QyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ0RPTUNvbnRlbnRMb2FkZWQnLCAtPlxuXG4gICAgbGFuZ3VhZ2VzID1cbiAgICAgICAgJ3BvbGlzaCcgOiAwLjk1XG4gICAgICAgICdlbmdsaXNoJyA6IDAuOFxuICAgICAgICAnaXRhbGlhbicgOiAwLjg1XG4gICAgICAgICdmcmVuY2gnIDogMC43NVxuXG4gICAgbGFuZ0JhcnMgPSBmb3IgbGFuZywgcHJvZmljaWVuY3kgb2YgbGFuZ3VhZ2VzXG4gICAgICAgIGJhciA9IG5ldyBQcm9ncmVzc0Jhci5DaXJjbGUgJyMnK2xhbmcsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogOFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0J1xuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICAgICAgICAgIHRyYWlsQ29sb3I6ICcjNzc3J1xuICAgICAgICAgICAgdHJhaWxXaWR0aDogMTJcblxuICAgICAgICBiYXIuYW5pbWF0ZShwcm9maWNpZW5jeSlcblxuICAgICMgdGVjaFNraWxscyA9XG4gICAgIyAgICAgJ2h0bWw1JyA6IDAuNjVcbiAgICAjICAgICAnY3NzMycgOiAwLjY1XG4gICAgIyAgICAgJ2pzJyA6IDAuNjVcbiAgICAjICAgICAnc2FzcycgOiAwLjZcbiAgICAjICAgICAnY29mZmVlJyA6IDAuNTVcbiAgICAjICAgICAnanF1ZXJ5JyA6IDAuNlxuICAgICMgICAgICdwaHAnIDogMC40XG4gICAgIyAgICAgJ3dvcmRwcmVzcycgOiAwLjQ1XG4gICAgIyAgICAgIyAncHl0aG9uJyA6IDAuNDVcbiAgICAjICAgICAjICd0ZXJtaW5hbCcgOiAwLjVcbiAgICAjICAgICAnZ2l0JyA6IDAuNVxuICAgICMgICAgICdndWxwJyA6IDAuNVxuICAgICNcbiAgICAjXG4gICAgIyB0ZWNoQmFycyA9IGZvciBza2lsbCwgcHJvZmljaWVuY3kgb2YgdGVjaFNraWxsc1xuICAgICMgICAgIGJhciA9IG5ldyBQcm9ncmVzc0Jhci5DaXJjbGUgJyMnK3NraWxsLFxuICAgICMgICAgICAgICBzdHJva2VXaWR0aDogNyxcbiAgICAjICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAjICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgIyAgICAgICAgIGNvbG9yOiAnIzIyMicsXG4gICAgIyAgICAgICAgIHRyYWlsQ29sb3I6ICcjY2NjJyxcbiAgICAjICAgICAgICAgdHJhaWxXaWR0aDogN1xuICAgICNcbiAgICAjICAgICBiYXIuYW5pbWF0ZShwcm9maWNpZW5jeSlcbiJdfQ==
