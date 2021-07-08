// basic object notations - dot (.) and bracket

var myCat = {
    name: 'Charlotte',
    type: 'tabby',
    age: 8,
    legs: 4,
    tail: 1,
    purrs: true
};

console.log(myCat.name);
console.log(myCat.purs);
console.log(myCat["name"]);
console.log(myCat["purs"]);

// adding properties
myCat.color = "black";
console.log(myCat + " is " + myCat.color);

// removing properties
console.log('Before the removal:');
console.log(myCat);
delete myCat.color;
console.log('After the removal:');
console.log(myCat);

// check if an object has a property using hasOwnProperty
var hasTails = myCat.hasOwnProperty('tail');
console.log('Does the cat have a tail property? ' + hasTails);

var possibleProperties = ["name", "age", "color", "hair", "tail", "legs", "purrs"];
console.log("\nProperty Checker");
for (var prop of possibleProperties) {
    console.log(prop + "? " + myCat.hasOwnProperty(prop));
}

/*
    COMPLEX OBJECTS
*/

var myWorkGroup = {
    "department" : "Information Technologies",
    "reports_to" : "Executive Team",
    "members" : [
        {
            "first_name" : "Helen",
            "last_name" : "Smith",
            "employee_id" : 1234899,
            "skills" : [
                "Java",
                "SQL",
                "Project Management"
            ],
            "manager_id" : 111111
        },
        {
            "first_name" : "Sharon",
            "last_name" : "Monshare",
            "employee_id" : 12849120,
            "skills" : [
                "JavaScript",
                "SaaS",
                "CI/CD"
            ],
            "manager_id" : 111111
        },
        {
            "first_name" : "Louise",
            "last_name" : "Holderman",
            "employee_id" : 111111,
            "skills" : [
                "Team Building",
                "Architecture",
                "Project Management"
            ],
            "manager_id" : 823749
        }
    ]
};

// assignment
var departmentName = myWorkGroup.department;
var secondPersonSkills = myWorkGroup.members[1].skills;

