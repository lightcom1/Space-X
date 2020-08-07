var instance = new vidbg('.video', {
  mp4: 'video/world.mp4', // URL or relative path to MP4 video
  webm: 'video/world.webm', // URL or relative path to webm video
  poster: 'video/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
var rellax = new Rellax('.rocket');
const rocket = document.querySelector('.rocket');
if(document.body.clientWidth < 769) {
	rellax.destroy();
	rocket.setAttribute('data-aos', 'fade-right')
	rocket.setAttribute('data-aos-delay', '500')
}
AOS.init();