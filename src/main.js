"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

let courseCodeEl = document.getElementById("course-code");

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courseCodeEl.addEventListener("click", sortCourseCode);

        
        displayCourses(courses);

    } catch {
        console.log("error");
    }
}

function displayCourses(courses) {
    let coursesEl = document.getElementById("course-list");
    coursesEl.innerHTML = "";

    courses.forEach((course) => {
        coursesEl.innerHTML += `
        <tr>
        <td>${ course.code }</td>
        <td>${ course.coursename }</td>
        <td>${ course.progression }</td>
        </tr>`;
    });
}

async function sortCourseCode() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courses.sort((a, b) => (a.code > b.code) ? 1 : -1);

        displayCourses(courses); 
    } catch (error) {
        console.log("Error:", error);
    }
}