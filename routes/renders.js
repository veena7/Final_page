const router = require('express').Router();

router.get('/', (req, res) => {
	return res.render('index',{user:{}});
});

router.get('/hotels', (req, res) => {
	return res.render('hotels');
});

router.get('/about', (req, res) => {
	return res.render('about');
});

router.get('/contact', (req, res) => {
	return res.render('contact');
});

router.get('/giftcards', (req, res) => {
	return res.render('giftcards');
});

router.get('/partner', (req, res) => {
	return res.render('partner');
});

router.get('/refund', (req, res) => {
	return res.render('refund');
});

router.get('/terms', (req, res) => {
	return res.render('terms');
});


router.get('/user', (req, res) => {
	return res.render('admin/user');
});

router.get('/refer', (req, res) => {
	return res.render('refer');
});

router.get('/career', (req, res) => {
	return res.render('career');
});

router.get('/faq', (req, res) => {
	return res.render('faq');
});

router.get('/tours', (req, res) => {
	return res.render('tours');
});

router.get('/blogs', (req, res) => {
	return res.render('blogs');
});


router.get('/newblog', (req, res) => {
	return res.render('Addblog');
});

router.get('/allblog', (req, res) => {
	return res.render('Allblog');
})
router.get('/blog', (req, res) => {
	return res.render('blog');
development
});

router.get('/userdetail', (req, res) => {
	return res.render('userdetail');
});

router.get('/packages', (req, res) => {
	return res.render('packages');
});

router.get('/forgot-password', (req, res) => {
	return res.render('forgot-password');
});

router.get('/offer', (req, res) => {
	return res.render('alloffer');
});

router.get('/addoffer', (req, res) => {
	return res.render('addoffers');
});

router.get('/hotelenquiry', (req, res) => {
	return res.render('hotel-enquiry');
});

router.get('/eventsenquiry', (req, res) => {
	return res.render('events-enquiry');
});

router.get('/profile', (req, res) => {
	return res.render('profile');
});
	
router.get('/user', (req, res) => {
	return res.render('admin/user');
});

router.get('/user/all-packages', (req, res) => {
	return res.render('admin/all-packages');
});

router.get('/user/all-package-category', (req, res) => {
	return res.render('admin/all-package-category');
});

router.get('/user/add-package', (req, res) => {
	return res.render('admin/add-package');

});

router.get('/user/add-package-category', (req, res) => {
	return res.render('admin/add-package-category');
});

router.get('/booking', (req, res) => {
	return res.render('booking');
});
router.get('/bookings', (req, res) => {
	return res.render('enquiry');
});

router.get('/addDiscount',(req,res) => {
	return res.render('addDiscount');
});

router.get('/allDiscounts',(req,res) => {
	return res.render('allDiscounts');
});

router.get('/user/all-room-type', (req, res) => {
	return res.render('admin/all-room-type');
});

router.get('/user/add-room-type', (req, res) => {
	return res.render('admin/add-room-type');
});

router.get('/user/add-hotel', (req, res) => {
	return res.render('admin/add-hotel');
});

router.get('/user/all-hotels', (req, res) => {
	return res.render('admin/all-hotels');
});

module.exports = router;
