var win = Titanium.UI.currentWindow;

//
// BASIC SLIDER
//
var basicSliderLabel = Titanium.UI.createLabel({
	text:'Basic Slider - value = 5' ,
	color:'#999',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:10,
	width:300
});

var basicSlider = Titanium.UI.createSlider({
	min:0,
	max:10,
	value:5,
	width:100,
	top:30,
	selectedThumbImage:'../images/slider_thumb.png',
	highlightedThumbImage:'../images/chat.png'
});
basicSlider.addEventListener('change',function(e)
{
	basicSliderLabel.text = 'Basic Slider - value = ' + e.value;
});

win.add(basicSliderLabel);
win.add(basicSlider);

//
// CUSTOM SLIDER
//
var customSliderLabel = Titanium.UI.createLabel({
	text:'Custom Slider - value = 25' ,
	color:'#999',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:70,
	width:300
});

Titanium.UI.currentWindow.add(customSliderLabel);
var customSlider = Titanium.UI.createSlider({
	min:0,
	max:100,
	value:25,
	width:268,
	height:11,
	top:90,
	leftTrackImage:'../images/slider_orangebar.png',
	rightTrackImage:'../images/slider_lightbar.png',
	thumbImage:'../images/slider_thumb.png',
	
});
customSlider.addEventListener('change',function(e)
{
	customSliderLabel.text = 'Custom Slider - value = ' + e.value;
});

win.add(customSliderLabel);
win.add(customSlider);

//
// CHANGE SLIDER
//
var changeButton = Titanium.UI.createButton({
	title:'Change Basic Slider',
	height:40,
	width:200,
	top:120
});
changeButton.addEventListener('click', function()
{
	basicSlider.value = 2;
	basicSlider.width = 268;
	basicSlider.height = 11;
	basicSlider.leftTrackImage = '../images/slider_orangebar.png';
	basicSlider.rightTrackImage = '../images/slider_lightbar.png';
	basicSlider.thumbImage = '../images/slider_thumb.png';
	basicSlider.highlightedThumbImage = '../images/slider_thumb.png';	
});
win.add(changeButton);


//
// SLIDER TOOLBAR
//
var toolbarButton = Titanium.UI.createButton({
	title:'Toggle Slider in Toolbar',
	height:40,
	width:200,
	top:170
});
var inToolbar = false;
toolbarButton.addEventListener('click', function()
{
	if (!inToolbar)
	{
		var toolbarSlider = Titanium.UI.createSlider({
			min:0,
			max:10,
			value:5,
			width:200
		});
		win.setToolbar([toolbarSlider],{animated:true})
		inToolbar = true;
	}
	else
	{
		win.setToolbar(null,{animated:true})
		inToolbar = false;
	}
});
win.add(toolbarButton);

//
// SLIDER NAVBAR
//
var navbarButton = Titanium.UI.createButton({
	title:'Toggle Slider in Navbar',
	height:40,
	width:200,
	top:220
});
var inNavbar = false;
navbarButton.addEventListener('click', function()
{
	if (!inNavbar)
	{
		var navbarSlider = Titanium.UI.createSlider({
			min:0,
			max:10,
			value:5,
			width:100,
		});
		win.setRightNavButton(navbarSlider);
		inNavbar = true;
	}
	else
	{
		win.rightNavButton = null;
		inNavbar = false;
	}
});
win.add(navbarButton);

//
// TOGGLE SLIDER VISIBILITY
//
var toggleButton = Titanium.UI.createButton({
	title:'Hide/Show Slider',
	height:40,
	width:200,
	top:270
});

var visible = true;
toggleButton.addEventListener('click', function()
{
	if (visible)
	{
		basicSlider.hide();
		customSlider.hide();
		visible=false;
	}
	else
	{
		basicSlider.show();
		customSlider.show();
		visible=true;
	}
	
});
win.add(toggleButton);

//
// SLIDER TO TITLE CONTROL 
//
var titleButton = Titanium.UI.createButton({
	title:'Toggle Slider in Title',
	height:40,
	width:200,
	top:320
});


var inTitle = false;
titleButton.addEventListener('click', function()
{
	if (inTitle)
	{
		win.titleControl = null;
		win.title = 'Slider';
		inTitle=false;
	}
	else
	{
		var titleSlider = Titanium.UI.createSlider({
			min:0,
			max:10,
			value:5,
			width:80
		});
		win.titleControl = titleSlider;
		inTitle=true;
	}
});
win.add(titleButton);