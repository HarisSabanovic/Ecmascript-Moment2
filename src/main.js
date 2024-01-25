"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        displayCourses(courses);
    } catch {
        console.log("error");
    }
}

function displayCourses(courses) {
    let coursesEl = document.getElementById("course-list");

    courses.forEach((course) => {
        coursesEl.innerHTML += `
        <tr>
        <td>${ course.code }</td>
        <td>${ course.coursename }</td>
        <td>${ course.progression }</td>
        </tr>`;
    });
}