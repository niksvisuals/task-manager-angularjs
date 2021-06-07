class Task{
    id; taskName; dateTime; reminder;
    constructor(taskName,dateTime,reminder){
        this.id = Math.ceil(Math.random()*1000);
        this.taskName = taskName;
        this.dateTime = dateTime;
        this.reminder = reminder;
    }
}
let t1 = new Task('Water the plants',new Date(Date.UTC(2020, 11, 20, 3, 23)),false);
let t2 = new Task('Feed the pets',new Date(Date.UTC(2021, 1, 24, 7, 53)),true);
let t3 = new Task('Party Time',new Date(Date.UTC(2019, 18, 22, 8, 13)),false);
let tasks1 = [t1,t2,t3];

let app = angular.module('app',[]);

app.controller('controller',function($scope){
    // $scope.taskName;
    $scope.option=false;
    $scope.tasks = tasks1;

    $scope.setReminder;
    $scope.dateTime;
    $scope.taskName;

    $scope.toggleReminder = function(element){
        let currTask = element.currentTarget;
        let taskID = parseInt(currTask.id);
        // console.log(currTask.classList);
        // let taskToUpdate = $scope.tasks.find(taskID=> taskID == Task.id);
        if(currTask.classList.length==1){
            currTask.classList.add('reminder');
        }
        else{
            currTask.classList.remove('reminder');
        }        
    }
    $scope.updateTasks = function(){
        // let taskName1 = ;
        // console.log($scope.taskName);
        if(!$scope.taskName){
            alert('Task cannot be empty');
        }
        else{
            if(!$scope.dateTime){
                $scope.dateTime = Date.now();
            }
            let createNewTask = new Task($scope.taskName,$scope.dateTime,$scope.reminder);
            $scope.tasks.push(createNewTask);
            $scope.option = false;
        }
    }
    $scope.deleteTask = function(element){
        // console.log('inside delete');
        let taskID = parseInt(element.currentTarget.parentElement.parentElement.id);
        // console.log(taskID);
        $scope.tasks = $scope.tasks.filter((task) => task.id !== taskID);
    }
});