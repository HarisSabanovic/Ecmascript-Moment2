"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

let courseCodeEl = document.getElementById("course-code");
let courseNameEl = document.getElementById("course-name");
let courseProgressionEl = document.getElementById("course-progression");

window.onload = init;

async function init() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        displayCourses(courses);

        courseCodeEl.addEventListener("click", sortCourseCode);
        courseNameEl.addEventListener("click", sortCourseName);
        courseProgressionEl.addEventListener("click", sortCourseProgression);


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

async function sortCourseName() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courses.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);

        displayCourses(courses); 
    } catch (error) {
        console.log("Error:", error);
    }
}

async function sortCourseProgression() {
    try {
        const response = await fetch(url);
        let courses = await response.json();

        courses.sort((a, b) => (a.progression > b.progression) ? 1 : -1);

        displayCourses(courses); 
    } catch (error) {
        console.log("Error:", error);
    }
}