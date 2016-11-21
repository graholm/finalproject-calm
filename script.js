<script>
var images = ['http://img12.deviantart.net/627f/i/2005/026/e/2/calm_sea_by_ladyrapid.jpg', 'https://static.pexels.com/photos/1826/wood-nature-sunny-forest.jpg', 'http://thirstypeople.org/wp-content/uploads/2016/02/calm_water-1.jpg', 'http://kingofwallpapers.com/calm-pictures/calm-pictures-022.jpg'];


document.getElementsByClassName('mainview')[0].style.backgroundImage = 'url(' + images[Math.round(Math.random() * images.length)] + ')';

</script>