# Work Day Scheduler
This program creates a daily planner to help manage time during your day. 

## User Story
When a user arrives to the page, the user will see any previosuly stored information populated from local storage onto the appropriate times. For example, if there were plans to eat at 12pm for lunch then that item should be persistent despite page refreshes. 

In addition the following components should be available:

* Current date displayed at the top of planner
* Timeblocks for standard business hours (9am-5pm)
* Each time block is color coded based on whether it is in the past, present, or future

## Code Strategy
I used JQuery to target classes and to set data attributes. This helped store data in to local storage. 

A few key code snippets that helped to do some heavy lifting:

```
$(".buttonRead").on("click", function () {
        event.preventDefault()
        var dataAttribInfo = $(this).attr("data-button");
        var inputUser = $(`#${dataAttribInfo}`).val()
        localStorage.setItem(dataAttribInfo, JSON.stringify(inputUser))
    }
    );
```

This allowed me to place an listener on an entire class and pull the associated data tag to use as a key for local storage. This was.. ehem... key because the data attribute allowed me to link with the time column. 


### Link to deployed World Quiz game
[World-Quiz]( https://crackedsnowboard.github.io/work-day-scheduler/)


#### Image of deployed web applicaton
<img src="images/assets-plannerlook.png">


###### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/)
[GitHub](https://github.com/crackedsnowboard)
