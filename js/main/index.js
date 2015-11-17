if($body.is('.index'))
{
	function printout() {
		if (!window.print){
			alert("列印功能暫時停用，請按 Ctrl-P 來列印"); return;
		}
		window.print();
	}
	function MM_openBrWindow(theURL,winName,features) {
		window.open(theURL,winName,features);
	}
	$(function() {
		$('.header--rating .level-beginner').find('i').addClass('random--color');
		randomText();
		randomColor();
		randomIdioms();
		$('.type-selection__body .level-beginner').addClass('show');
	});

	$('body').on('click', '.header--rating li', function(event) {
		$('.type-selection__nav button').removeClass('active');
		$(this).addClass('active');
		$('.header--rating i').removeClass('random--color').css({color: '#cccccc'});;
		$(this).find('i').addClass('random--color');
		$(this).prevAll('.header--rating li').find('i').addClass('random--color');
		var select_level = $(this).text();
		$('.type-selection__nav__current button span').text(select_level);
		$('.type-selection__nav ul').removeClass('open');

		randomText();
		randomColor();
	});

	$('body').on('click', '.btn--reload-type', function() {
		randomText();
		randomColor();
	});

	$('body').on('click', function(event) {
		if (!$(event.target).closest('.type-selection__nav__current button').length) {
			$('.type-selection__nav ul').removeClass('open');
		}
	});

	

	$('body').on('click', '#type-generator', function() {
		$(this).parent().find('.drop--type-selection-footer').toggleClass('open');
	});

	$('body').on('click', '#idioms-random', function() {
		$('#special-random').removeClass('active');
		$(this).addClass('active');
		randomIdioms();
	});

	$('body').on('click', '#special-random', function() {
		$('#idioms-random').removeClass('active');
		$(this).addClass('active');
		randomSpecial();
	});

	$('body').on('click', '.btn--close', function() {
		removeDrop();
	});

	$('body').on('click', function(event) {
		if (!$(event.target).closest('.type-selection__footer__list button,.drop--type-selection-footer').length) {
			removeDrop();
		}
	});

	function removeDrop() {
		$('.drop--type-selection-footer').removeClass('open');
	}

	function randomColor() {
		var colorArray = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue', 'Cyan', 'Teal', 'Green', 'Light Green', 'Amber', 'Orange', 'Deep Orange'];
		var color_rand = colorArray[Math.floor(Math.random() * colorArray.length)];
		$('.random--color').css({
			'color': palette.get(color_rand, '500'),
			'border-bottom-color': palette.get(color_rand, '500')
		}); 
		$('.random--background').css({
			backgroundColor: palette.get(color_rand, '500')
		});
	}	

	function randomIdioms() {
		var idiomsArray = ['開誠佈公','七步成詩','栩栩如生','惟妙惟肖','莊周夢蝶','畫虎類犬','不倫不類','畫蛇添足','醉生夢死','敬謝不敏','當仁不讓','才疏學淺','兄弟鬩牆','八仙過海','三顧茅廬','煮豆燃萁','大公無私','才高八斗','積少成多','聚沙成塔','集腋成裘','眾志成城','杯水車薪','草船借箭','愛屋及烏','沉魚落雁','老馬識途','四面楚歌','漁翁得利','噤若寒蟬','水落石出','一諾千金','先聲奪人','狐假虎威','人言可畏','背水一戰','車水馬龍','奇貨可居','馬首是瞻','杯弓蛇影','朝三暮四','大器晚成','洛陽紙貴','不屈不撓','九牛一毛','滄海桑田','囫圇吞棗','不恥下問','口若懸河','守株待兔','井底之蛙','班門弄斧','暗渡陳倉','分道揚鑣','百尺竿頭','後生可畏','梅開二度','百川歸海','一丘之貉','如火如荼','望梅止渴','南柯一夢','百折不撓','完璧歸趙','毛遂自薦','一鳴驚人','雞鳴狗盜','三令五申','百步穿楊','天經地義','不遠千里','一字千金','指鹿為馬','亡羊補牢','杞人憂天','聞雞起舞','一毛不拔','一意孤行','約法三章','繞梁三日','如出一轍','沽名釣譽','河東獅吼','沾沾自喜','洗耳恭聽','涇渭分明','淋漓盡致','山窮水盡','滄海桑田','滄海一粟','浮光掠影','渾渾噩噩','滄海遺珠','溫故知新','炙手可熱','滿城風雨','海市蜃樓','滿腹經綸','巧取豪奪','岌岌可危','居心叵測','五里霧中','流離失所','平地風波','蠶食鯨吞','川流不息','居安思危','對牛彈琴','海底撈針','泰然自若','左右逢源','巧言令色','屈指可數','對症下藥','海枯石爛','剛愎自用','左顧右盼','巧奪天工','風花雪月','小巧玲瓏','海誓山盟','席不暇暖','差強人意','山高水長','尸位素餐','將計就計','尋花問柳','威風凜凜','孤芳自賞','孤注一擲','子虛烏有','天羅地網','寸草春暉','如喪考妣','孤苦伶仃','嬌生慣養','孑然一身','天翻地覆','將信將疑','如雷貫耳','孤陋寡聞','孜孜不倦','天誅地滅','大言不慚','寡不敵眾','如膠似漆','孤掌難鳴','天造地設','失之交臂','夢筆生花','寡廉鮮恥','如數家珍','好高騖遠','道聽塗說','大千世界','大公無私','實事求是','立竿見影','好事多磨','天衣無縫','夜以繼日','夜郎自大','寡信輕諾','如坐針氈','好逸惡勞','天作之合','夢寐以求','多難興邦','寄人籬下','如魚得水','緣木求魚','天馬行空','夙夜匪懈','壯志凌雲','寅吃卯糧','如虎添翼','敝帚自珍','天花亂墜','壽比南山','外強中乾','完璧歸趙','塞翁失馬','執迷不悟','城下之盟','垂言三尺','坐井觀天','害群之馬','坐懷不亂','土崩瓦解','國色天香','困獸之鬥','回頭是岸','家喻戶曉','嘔心瀝血','嗤之以鼻','因材施教','因地制宜','嘆為觀止','家徒四壁','唾手可得','喧賓奪主','喋喋不休','單刀直入','哀鴻遍野','學富五車','咬文嚼字','和衷共濟','咎由自取','咫尺天涯','東窗事發','安步當車','吳下阿蒙','含飴弄孫','吹毛求疵','參差不齊','否極泰來','守口如瓶','咄咄逼人','呆若木雞','口蜜腹劍','南轅北轍','各有千秋','刻舟求劍','叱吒風雲','另起爐灶','半斤八兩','危如累卵','反求諸己','活靈活現','鳩占鵲巢','不足掛齒','不求甚解','不苟言笑','不言而喻','情竇初開','閉月羞花','不勞而獲','阿諛奉承','卑躬屈膝','閹然媚世','曲意逢迎','趨炎附勢','螳螂捕蟬','攀權附貴','剛正不阿','未雨綢繆','孟母三遷','鷸蚌相爭','不相上下','難分軒輊','寸步不離','過猶不及'];
		var idioms_rand = idiomsArray[Math.floor(Math.random() * idiomsArray.length)];
		$('.drop--type-selection-footer .content h3').text(idioms_rand);
	}

	function randomSpecial() {
		var specialArray = ['三力愛鷹','永国東靈','今袋酬鬱','毛室激鬪','紙辺機驚','上下卷米','州巫十心','王中田令','回能品露','起居想句','匠函同意','術志朋人','封節運籌','藥存文灌'];
		var special_rand = specialArray[Math.floor(Math.random() * specialArray.length)];
		$('.drop--type-selection-footer .content h3').text(special_rand);
	}

}
