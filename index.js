//get the terms based on start and end dates
let terms = [
  {
    "_links": {
      "self": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/terms/6880,UGRD"
      },
      "v1-scheduled_courses": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/scheduled_courses?term_code=6880&career_code=UGRD"
      },
      "v1-term_sessions": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/term_sessions?term_id=6880,UGRD"
      }
    },
    "term_id": "6880,UGRD",
    "term_code": "6880",
    "career_code": "UGRD",
    "career_title": "Undergraduate",
    "begin_date": "2018-11-26",
    "end_date": "2019-02-09",
    "term_title": "Summer Semester, 2018",
    "year": "2018",
    "term_category_code": "3",
    "term_category_title": "Summer Semester",
    "is_current_term": false
  },
  {
    "_links": {
      "self": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/terms/6920,UGRD"
      },
      "v1-scheduled_courses": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/scheduled_courses?term_code=6920&career_code=UGRD"
      },
      "v1-term_sessions": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/term_sessions?term_id=6920,UGRD"
      }
    },
    "term_id": "6920,UGRD",
    "term_code": "6920",
    "career_code": "UGRD",
    "career_title": "Undergraduate",
    "begin_date": "2019-02-25",
    "end_date": "2019-06-22",
    "term_title": "Semester 1, 2019",
    "year": "2019",
    "term_category_code": "1",
    "term_category_title": "1st Semester",
    "is_current_term": false
  },
  {
    "_links": {
      "self": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/terms/6960,UGRD"
      },
      "v1-scheduled_courses": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/scheduled_courses?term_code=6960&career_code=UGRD"
      },
      "v1-term_sessions": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/term_sessions?term_id=6960,UGRD"
      }
    },
    "term_id": "6960,UGRD",
    "term_code": "6960",
    "career_code": "UGRD",
    "career_title": "Undergraduate",
    "begin_date": "2019-07-22",
    "end_date": "2019-11-16",
    "term_title": "Semester 2, 2019",
    "year": "2019",
    "term_category_code": "2",
    "term_category_title": "2nd Semester",
    "is_current_term": false
  },
  {
    "_links": {
      "self": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/terms/6980,UGRD"
      },
      "v1-scheduled_courses": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/scheduled_courses?term_code=6980&career_code=UGRD"
      },
      "v1-term_sessions": {
        "href": "https://student.test.api.aws.uq.edu.au/v1/term_sessions?term_id=6980,UGRD"
      }
    },
    "term_id": "6980,UGRD",
    "term_code": "6980",
    "career_code": "UGRD",
    "career_title": "Undergraduate",
    "begin_date": "2019-11-25",
    "end_date": "2020-02-08",
    "term_title": "Summer Semester, 2019",
    "year": "2019",
    "term_category_code": "3",
    "term_category_title": "Summer Semester",
    "is_current_term": true
  }
];

let studentEnrolledTerms = [
  {
    "termTitleForSearch": "2020, Semester 1",
    "termTitle": "Semester 1, 2020"
  },
  {
    "termTitleForSearch": "2019, Semester 2",
    "termTitle": "Semester 2, 2019"
  },
  {
    "termTitleForSearch": "2019, Semester 1",
    "termTitle": "Semester 1, 2019"
  },
  {
    "termTitleForSearch": "2018, Semester 2",
    "termTitle": "Semester 2, 2018"
  },
  {
    "termTitleForSearch": "2018, Semester 1",
    "termTitle": "Semester 1, 2018"
  },
  {
    "termTitleForSearch": "2017, Semester 2",
    "termTitle": "Semester 2, 2017"
  }
];

//get the current term



let currentTermTitle = terms.filter(function(item) {
  return item.is_current_term === true;
})[0].term_title;

console.log(currentTermTitle);

var termsToDisplay = [];
var current = currentTermTitle;

//if student has enrolments for the current term
var indexOfCurrentSem = studentEnrolledTerms.findIndex(i => i.termTitle === current);
indexOfCurrentSem = indexOfCurrentSem == -1 ? 0 : indexOfCurrentSem
console.log(indexOfCurrentSem);

//if the student has enrolments for the current + 1 term
if (indexOfCurrentSem >= 1) {
  termsToDisplay.push(studentEnrolledTerms[indexOfCurrentSem - 1]);
}

var count = 0;
for (var i = indexOfCurrentSem; i < studentEnrolledTerms.length; i++) {
  termsToDisplay.push(studentEnrolledTerms[i]);
  if (count >= 2) break;
  count++;
}

if (indexOfCurrentSem >= 1) {
termsToDisplay.splice(indexOfCurrentSem,1);
termsToDisplay.unshift(studentEnrolledTerms[indexOfCurrentSem]);
}


console.log(termsToDisplay);

