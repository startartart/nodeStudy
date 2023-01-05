const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (keyword) => {
    try {
        return await axios.get(
            "https://www.inflearn.com/courses?s=" + encodeURI(keyword));
    } catch (error) {
        console.error(error);
    }
};

const parsing = async (page) => {
    const $ = cheerio.load(page);

    const $courseList = $('.course_card_item');

    let courses = [];
    $courseList.each((idx, node) => {
        const title = $(node).find(".course_title:eq(0)").text();
        const instructor = $(node).find(".instructor").text();
        const prices = $(node).find(".price").text().split("₩");
        const rating = $(node).find(".star_solid").css("width");
        const imgSrc = $(node).find(".card-image > figure > img").attr("src");
        const originalPrice = (prices[0] == "무료") ? "무료" : prices[1];
        const discountPrice = (prices.length == 3)? prices[2] : originalPrice;

        courses.push({
            title: title,
            instructor: instructor,
            originalPrice: originalPrice,
            discountPrice: discountPrice,
            rating: rating,
            imgSrc: imgSrc
        });
    });

    return courses;
};

const getCourses = async (keyword) => {
    const html = await getHTML(keyword);
    const courses = await parsing(html.data);
    console.log(courses);
}

getCourses("java");