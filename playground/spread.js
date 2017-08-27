var person1 = ['Ahmed halawa', 'Frontend Developer', 22];
var person2 = ['Jone Doe', 'Web Developer', 30];

function greet(name, job, age) {
    console.log('My name is ' + name + ', i am a ' + job + ', i am ' + age + ' years old');
}

greet(...person1);
greet(...person2);