// mobile menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// mobile menu end
var project = new Vue({
	el: '#project',
	data:{
		store_name: 'Projects',
		projects: [
			{
				title: 'Summer House',
				img: 'img/house5.jpg'
			},
			{
				title: 'Brick House',
				img: 'img/house2.jpg'
			},
			{
				title: 'Renovated',
				img: 'img/house3.jpg'
			},
			{
				title: 'Barn House',
				img: 'img/house4.jpg'
			},
			{
				title: 'Summer House',
				img: 'img/house2.jpg'
			},
			{
				title: 'Brick House',
				img: 'img/house5.jpg'
			},
			{
				title: 'Renovated',
				img: 'img/house4.jpg'
			},
			{
				title: 'Barn House',
				img: 'img/house3.jpg'
			},

		],
	}
});
var about_content = new Vue({
	el: '#about',
	data: {
		store_name_about: 'About',
		my_about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in earum, nihil aut, pariatur laboriosam aperiam officiis minus, hic ullam repellendus natus, minima vero. Incidunt laudantium a dolore laborum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in earum, nihil aut, pariatur laboriosam aperiam officiis minus, hic ullam repellendus natus, minima vero. Incidunt laudantium a dolore laborum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in earum, nihil aut, pariatur laboriosam aperiam officiis minus, hic ullam repellendus natus, minima vero. Incidunt laudantium a dolore laborum',
		blocks: [
			{
				img: 'img/team2.jpg',
				title: 'Jon Doe',
				profession: 'SEO & Founder',
				about: 'Lorem ipsum dolor sit amet quam cumque dignissimos quisquam quia. Dolor, facilis doloribus..',
				link: 'Contact'
			},
			{
				img: 'img/team1.jpg',
				title: 'Jon Doe',
				profession: 'SEO & Founder',
				about: 'Lorem ipsum dolor sit amet quam cumque dignissimos quisquam quia. Dolor, facilis doloribus..',
				link: 'Contact'
			},
			{
				img: 'img/team3.jpg',
				title: 'Jon Doe',
				profession: 'SEO & Founder',
				about: 'Lorem ipsum dolor sit amet quam cumque dignissimos quisquam quia. Dolor, facilis doloribus..',
				link: 'Contact'
			},
			{
				img: 'img/team4.jpg',
				title: 'Jon Doe',
				profession: 'SEO & Founder',
				about: 'Lorem ipsum dolor sit amet quam cumque dignissimos quisquam quia. Dolor, facilis doloribus..',
				link: 'Contact'
			},
		],
	}
});