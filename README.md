# tomkovich-s-slider


[Demo](http://mee.tomkovich-ya.ru/).

### Example markup:

```
<div class="slider tom-slider">
	<div class="slides">
		<div class="slide"></div>
		<div class="slide"></div>
		<div class="slide"></div>
	</div>
	<div class="tom-navigation">
		<button class="arrowNext"> > </button>
		<button class="arrowPrev"> < </button>
	</div>
</div>
```
My slider has the options:

You need selector of your slider </br>
<strong>selector</strong>: string </br>
<strong>default</strong>: '.tom-slider' </br>

<strong>margin</strong>: string </br>
<strong>default</strong>: '0px' </br>

<strong>arrowPrev</strong>: string </br>
<strong>default</strong>: '.arrowPrev' </br>

<strong>arrowNext</strong>: string </br>
<strong>default</strong>: '.arrowNext' </br>

<strong>innerArrowNext</strong>: string </br>
<strong>default</strong>: '>' </br>

<strong>innerArrowPrev</strong>: string </br>
<strong>default</strong>: '<' </br>

<strong>slidesShow</strong>: number </br>
<strong>default</strong>: 1 </br>

<strong>autoplay</strong>: boolean </br>
<strong>default</strong>: false </br>

<strong>autoHeight</strong>: boolean </br>
<strong>default</strong>: false </br>
*This option sets the height of the slider based on the highest slide

<strong>response</strong>: Object </br>
<strong>default</strong>: empty Object </br>

### Example response option:

```
response: {
	992: {
		slidesShow: 2
	},
	576: {
		slidesShow: 1
	}
}
```

If you find a bug write to me - tomkovich.ya@yandex.by or yanaooppss@gmail.com
