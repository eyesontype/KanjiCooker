var wordWidthArray = ['窄。','略窄。','正常。','略寬。','寬。'];
var wordWeightArray = ['細。','略細。','普通。','略粗。','粗。'];
var wordConstructionArray = ['漢字直排。','漢字橫排。'];
var wordStrokeEndingArray = ['有駐筆。','無駐筆。','尖角結尾。','圓角結尾。','平角結尾。'];
var wordContrastArray = ['無對比。','些微對比。','低對比。','適中對比。','略高對比。','高對比。'];

var wordStemArray = ['直線。','些微凹陷。'];
var wordLetterRangeArray = ['大。','略大。','適中。','略小。','小。'];
var wordCentralArray = ['緊縮。','略緊縮。','適中。','略寬鬆。','寬鬆。'];
var wordGravityArray = ['低。','略低。','適中。','略高。','高。'];

var wordApplicationArray = ['多用途。','平板印刷。','標誌系統。','包裝設計。','紙本內文閱讀。','標題使用。','未知。','商標使用。'];
var wordIntendedSizeArray = ['極小尺寸','閱讀尺寸','標題尺寸','超大尺寸','所有尺寸'];
var wordSpecialArray = ['兩個十五劃以上的字。','一個二十劃以上的字。','全直線。','無直線。','傾斜設計。','手書風格。','破格設計。'];


$('body').on('click', '.header--rating .level-beginner', function() {
		//陣列等級控制
		wordWidthArray.length = 5;
		wordWeightArray.length = 5;
		wordConstructionArray.length = 2;
		wordStrokeEndingArray.length = 5;
		wordContrastArray.length = 6;
		
		//console.log(wordGravityArray);

		$('.type-selection__body li').removeClass('show');
		$('.type-selection__body .level-beginner').addClass('show');
		$('.current-level').text('入門級');
	});
$('body').on('click', '.header--rating .level-normal', function() {
		//陣列等級控制
		wordWidthArray.length = 5;
		wordWeightArray.length = 5;
		wordLetterRangeArray.length = 5;
		wordConstructionArray.length = 2;
		wordStrokeEndingArray.length = 5;
		wordContrastArray.length = 6;

		//console.log(wordGravityArray);

		$('.type-selection__body li').removeClass('show');
		$('.type-selection__body .level-beginner, .type-selection__body .level-normal').addClass('show');
		$('.current-level').text('一般級');
	});
$('body').on('click', '.header--rating .level-class', function() {
		//陣列等級控制
		wordWidthArray.length = 5;
		wordWidthArray.length = 7;
		wordWidthArray.push('超窄。','超寬。');

		wordWeightArray.length = 5;
		wordWeightArray.length = 7;
		wordWeightArray.push('超細。','超粗。');

		wordLetterRangeArray.length = 5;
		wordCentralArray.length = 5;
		wordGravityArray.length = 5;
		wordStemArray.length = 2;
		wordConstructionArray.length = 2;

		wordStrokeEndingArray.length = 5;
		wordStrokeEndingArray.length = 10;
		wordStrokeEndingArray.push('扇形結尾。','書法迴鋒。','楔形角結尾。','喇叭口。','有三角駐筆。');

		wordContrastArray.length = 6;
		wordContrastArray.length = 7;
		wordContrastArray.push('些微反轉對比。');
		
		wordApplicationArray.length = 8;
		
		//console.log(wordGravityArray);

		$('.type-selection__body li').addClass('show');
		$('.type-selection__body .level-player').removeClass('show');
		$('.current-level').text('進階級');
});

$('body').on('click', '.header--rating .level-player', function() {
		//陣列等級控制
		wordWidthArray.length = 5;
		wordWidthArray.length = 10;
		wordWidthArray.push('超窄。','超寬。','極窄。','極寬。','每個字不定寬。');

		wordWeightArray.length = 5;
		wordWeightArray.length = 9;
		wordWeightArray.push('超細。','超粗。','髮絲細。','極粗。');

		wordLetterRangeArray.length = 5;
		wordLetterRangeArray.length = 7;
		wordLetterRangeArray.push('超大。','超小。');

		wordCentralArray.length = 5;
		wordCentralArray.length = 7;
		wordCentralArray.push('極緊縮。','極寬鬆。');

		wordGravityArray.length = 5;
		wordGravityArray.length = 7;
		wordGravityArray.push('極低。','極高。');

		wordStemArray.length = 2;
		wordStemArray.length = 4;
		wordStemArray.push('無直線。','明顯凹陷。');

		wordConstructionArray.length = 2;
		wordConstructionArray.length = 4;
		wordConstructionArray.push('漢字加標點符號。','漢字加數字。');

		wordStrokeEndingArray.length = 5;
		wordStrokeEndingArray.length = 13;
		wordStrokeEndingArray.push('扇形結尾。','書法迴鋒。','楔形角結尾。','喇叭口。','有三角駐筆。','以平頭筆書寫。','以圓頭麥克筆書寫。','以毛筆書寫。');

		wordContrastArray.length = 6;
		wordContrastArray.length = 9;
		wordContrastArray.push('些微反轉對比。','反轉對比。','超高對比。');

		wordApplicationArray.length = 8;
		wordApplicationArray.length = 14;
		wordApplicationArray.push('橡皮印章。','通用設計。','燈箱使用。','筆電螢幕顯示。','手機閱讀。','電視字幕。');

		wordIntendedSizeArray.length = 5;
		wordSpecialArray.length = 7;

		//console.log(wordGravityArray);

		$('.type-selection__body li').addClass('show');
		$('.current-level').text('玩家級');
	});
$('body').on('click', '.header--rating .level-expert', function() {
		//陣列等級控制
		wordWidthArray.length = 5;
		wordWidthArray.length = 10;
		wordWidthArray.push('超窄。','超寬。','極窄。','極寬。','每個字不定寬。');

		wordWeightArray.length = 5;
		wordWeightArray.length = 9;
		wordWeightArray.push('超細。','超粗。','髮絲細。','極粗。');

		wordLetterRangeArray.length = 5;
		wordLetterRangeArray.length = 7;
		wordLetterRangeArray.push('超大。','超小。');

		wordCentralArray.length = 5;
		wordCentralArray.length = 7;
		wordCentralArray.push('極緊縮。','極寬鬆。');

		wordGravityArray.length = 5;
		wordGravityArray.length = 7;
		wordGravityArray.push('極低。','極高。');

		wordStemArray.length = 2;
		wordStemArray.length = 8;
		wordStemArray.push('無直線。','明顯凹陷。','上窄下寬。','上寬下窄。','燭台型。','鼓起。');

		wordConstructionArray.length = 2;
		wordConstructionArray.length = 5;
		wordConstructionArray.push('漢字加標點符號。','漢字加數字。','漢字加注音符號。');

		wordStrokeEndingArray.length = 5;
		wordStrokeEndingArray.length = 16;
		wordStrokeEndingArray.push('扇形結尾。','書法迴鋒。','楔形角結尾。','喇叭口。','有三角駐筆。','以平頭筆書寫。','以圓頭麥克筆書寫。','以毛筆書寫。','某些筆劃有駐筆。','不規則形狀。','巴洛克風格。');

		wordContrastArray.length = 6;
		wordContrastArray.length = 9;
		wordContrastArray.push('些微反轉對比。','反轉對比。','超高對比。');

		wordApplicationArray.length = 8;
		wordApplicationArray.length = 18;
		wordApplicationArray.push('橡皮印章。','通用設計。','燈箱使用。','筆電螢幕顯示。','手機閱讀。','電視字幕。','點陣字。','木刻字。','霓虹燈製作。','反白使用。');

		wordIntendedSizeArray.length = 5;

		wordSpecialArray.length = 7;
		wordSpecialArray.length = 11;
		wordSpecialArray.push('飛白設計。','弧線轉換成八角形。','連字設計。','模板字。');

		//console.log(wordGravityArray);
		
		$('.type-selection__body li').addClass('show');
		$('.current-level').text('專家級');
	});

function randomText() {

	var width_rand = wordWidthArray[Math.floor(Math.random() * wordWidthArray.length)];
	$('[data-type="word-width"] .content h3').text(width_rand);

	var weight_rand = wordWeightArray[Math.floor(Math.random() * wordWeightArray.length)];
	$('[data-type="word-weight"] .content h3').text(weight_rand);

	var construction_rand = wordConstructionArray[Math.floor(Math.random() * wordConstructionArray.length)];
	$('[data-type="word-construction"] .content h3').text(construction_rand);

	var stroke_ending_rand = wordStrokeEndingArray[Math.floor(Math.random() * wordStrokeEndingArray.length)];
	$('[data-type="word-stroke-ending"] .content h3').text(stroke_ending_rand);

	var stem_rand = wordStemArray[Math.floor(Math.random() * wordStemArray.length)];
	$('[data-type="word-stem"] .content h3').text(stem_rand);

	var letter_range_rand = wordLetterRangeArray[Math.floor(Math.random() * wordLetterRangeArray.length)];
	$('[data-type="word-letter-range"] .content h3').text(letter_range_rand);

	var central_rand = wordCentralArray[Math.floor(Math.random() * wordCentralArray.length)];
	$('[data-type="word-central"] .content h3').text(central_rand);

	var gravity_rand = wordGravityArray[Math.floor(Math.random() * wordGravityArray.length)];
	$('[data-type="word-gravity"] .content h3').text(gravity_rand);

	var contrast_rand = wordContrastArray[Math.floor(Math.random() * wordContrastArray.length)];
	$('[data-type="word-contrast"] .content h3').text(contrast_rand);

	var application_rand = wordApplicationArray[Math.floor(Math.random() * wordApplicationArray.length)];
	$('[data-type="word-application"] .content h3').text(application_rand);

	var intended_size_rand = wordIntendedSizeArray[Math.floor(Math.random() * wordIntendedSizeArray.length)];
	$('[data-type="word-intended-size"] .content h3').text(intended_size_rand);

	var special_rand = wordSpecialArray[Math.floor(Math.random() * wordSpecialArray.length)];
	$('[data-type="word-special"] .content h3').text(special_rand);
}