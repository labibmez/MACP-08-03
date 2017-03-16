function calendarDateFormat(cssClass,idComponent)
{
   myApp.calendar({    
    input: '#'+idComponent,    
    dateFormat: cssClass,
    closeOnSelect : true
}); 
}

function AmountFormat(elementId,decimalprecision,groupseparator,decimalseparator)
{
    var element = document.getElementById(elementId); 
    var value=element.value;
    if(value!="")
        {
    var output=accounting.formatMoney(value,"",decimalprecision,groupseparator,decimalseparator);
    element.value= output;
        }
    
};

function NumericFormat(elementId,groupSeparator)
{
    var element = document.getElementById(elementId); 
    var value=element.value;
    if(value!="")
         {
             var output;
             if(groupSeparator===",")
        output=accounting.formatNumber(value);
             else
          output=accounting.formatNumber(value,""," ");        
    element.value= output;
         }
};           
       

function percentageFormat(elementId,decimalprecision,decimalseparator)
{
    var element = document.getElementById(elementId); 
    var value=element.value; 
     if(value!="")
         {
     var output=accounting.formatMoney(value,"",decimalprecision,"",decimalseparator);
     element.value= output;   
         }               
};    

function handleRequiredIcon(component,componentType,elementId,decimalprecision,groupseparator,decimalseparator)
{
    switch(componentType)
    {
        case "dateonly":
        case "textbox" :         
            $(component).closest("div.item-inner").removeClass("requiredIcon");
            break;        
        case "combobox" :         
            $(component).siblings("div.item-inner").removeClass("requiredIcon");
            break;                
        case "amount" :         
            $(component).closest("div.item-inner").removeClass("requiredIcon");
            AmountFormat(elementId,decimalprecision,groupseparator,decimalseparator);
            break;
        case "amount" :         
            $(component).closest("div.item-inner").removeClass("requiredIcon");
            AmountFormat(elementId,decimalprecision,groupseparator,decimalseparator);
            break;
        case "checkbox" :         
            $(component).closest("label.label-checkbox").removeClass("requiredIcon");
            break;                                
    } 
    //textbox

    //combobox
    //$(component).siblings("div.item-inner").removeClass("requiredIcon");
    
}
/*
function DateFormat(elementId,dateFormat)
{
     var element = document.getElementById(elementId); 
     var output;
     var value=element.value;
    if(value!="")
        {
            var mydate = new Date(value);
             var day = mydate.getDate();
            var monthIndex = mydate.getMonth();
            var year = mydate.getFullYear();
            if(dateFormat.charAt(0)==='M')
              output=monthIndex+"/"+day+"/"+year;
            else
                output=day+"/"+monthIndex+"/"+year;
            element.value= output;   
        }
       
       
}
*/  