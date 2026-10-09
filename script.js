let questioncontainer=document.querySelector(".question");
let question=questioncontainer.querySelector("h2");
let select=questioncontainer.querySelector("select");
let options=document.querySelectorAll("option");
let option=document.querySelector("option");
let next=document.querySelector("button");
let card=document.querySelector(".card");
let buttons=card.querySelector(".buttons");

let currentquestion=1;
let answer1 = "";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let finaltext;

next.addEventListener("click",function(det)
{
    
    if(currentquestion===1)
    {
        if(select.value.trim()==="")
        {
            alert("Select the Location...");
        }
        else
        {
            answer1=select.value;
            currentquestion++;
            question2();
        }
    }
});

function question2()
{
        question.textContent="How is your mood right now?";
        let text=["How is you Mood","Happy","Tired","stressed"];
        let textvalue=["","happy","tired","stressed"];
        let k=0;
        options.forEach(function(option)
        {
            if(k===0)
            {
                option.textContent=text[k];
                option.value="";
                k++;
                option.selected=true;
                option.disabled=true;
            }
            else
            {
                 option.textContent=text[k];
                 option.value=textvalue[k];
                 k++;
            }
        });
        next.addEventListener("click",function(det)
        {
           if(currentquestion===2)
           {
                if(select.value.trim()==="")
                {
                    alert("How is your Mood...");
                }
                else
                {
                    answer2=select.value;
                    currentquestion++;
                    question3();
                }
           }
        })
}

function question3()
{
    question.textContent = "What do you want to do?";

    let text = ["What do you want to do?", "Study", "Code", "Relax"];
      let textvalue=["","study","code","relax"]
    let k = 0;

    options.forEach(function(option)
    {
        if(k === 0)
        {
            option.textContent = text[k];
            option.value = "";
            k++;
            option.selected = true;
            option.disabled = true;
        }
        else
        {
            option.textContent = text[k];
            option.value = textvalue[k];
            k++;
        }
    });

    next.addEventListener("click", function(det)
    {
        if(currentquestion === 3)
        {
            if(select.value.trim() === "")
            {
                alert("Please select what you want to do...");
            }
            else
            {
                answer3 = select.value;
                currentquestion++;
                question4();
            }
        }
    });
}

function question4()
{
    question.textContent = "How much time do you have?";

    let text = ["Select your available time", "15 minutes", "30 minutes", "1 hour"];
      let textvalue=["","15min","30min","1hr"]
    let k = 0;

    options.forEach(function(option)
    {
        if(k === 0)
        {
            option.textContent = text[k];
            option.value = "";
            k++;
            option.selected = true;
            option.disabled = true;
        }
        else
        {
            option.textContent = text[k];
            option.value = textvalue[k];
            k++;
        }
    });

    next.addEventListener("click", function(det)
    {
        if(currentquestion === 4)
        {
            if(select.value.trim() === "")
            {
                alert("Please select your available time...");
            }
            else
            {
                answer4 = select.value;
                finaltext=generateRecommendation();
                laststep(finaltext);
            }
        }
    });
}

    

function laststep(finaltext)
{
    questioncontainer.removeChild(question);
    questioncontainer.removeChild(select);
    buttons.removeChild(next);

    let h1 = document.createElement("h1");

    h1.textContent = finaltext;
    h1.style.fontSize = "21px";
    h1.style.color = "#B96E50";
    h1.style.fontWeight = "bold";
    console.log(finaltext);
    questioncontainer.appendChild(h1);
    
}

function generateRecommendation() {

    // HOME + HAPPY
    if (answer1 === "home" && answer2 === "happy" && answer3 === "study" && answer4 === "15min")
        return "Revise one college topic or solve one quick question.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "study" && answer4 === "30min")
        return "Study one topic for 20 minutes and test yourself for the remaining time.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "study" && answer4 === "1hr")
        return "Focus on an important college subject and practise questions. Finish by reviewing what you learned.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "code" && answer4 === "15min")
        return "Practise JavaScript forEach(), fix one bug, or improve a small part of your website.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "code" && answer4 === "30min")
        return "Build one feature in your current project or solve one DSA problem.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "code" && answer4 === "1hr")
        return "Spend a focused hour improving your project or practising Java and DSA.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "relax" && answer4 === "15min")
        return "Watch a funny scene from a South Indian movie or listen to your favourite songs.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "relax" && answer4 === "30min")
        return "Enjoy a comedy scene or explore a feel-good South Indian movie.";

    if (answer1 === "home" && answer2 === "happy" && answer3 === "relax" && answer4 === "1hr")
        return "Watch a feel-good movie, enjoy a hobby, and take a proper break.";

    // HOME + TIRED
    if (answer1 === "home" && answer2 === "tired" && answer3 === "study" && answer4 === "15min")
        return "Rest briefly, then recall five points from a familiar topic.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "study" && answer4 === "30min")
        return "Take a short rest and do some light revision instead of starting a difficult chapter.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "study" && answer4 === "1hr")
        return "Recharge first, then study in a comfortable session with breaks if needed.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "code" && answer4 === "15min")
        return "Review your existing JavaScript code or write down one bug you want to fix.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "code" && answer4 === "30min")
        return "Review a familiar concept or organise the next steps of your project.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "code" && answer4 === "1hr")
        return "Take a proper break first. If you feel refreshed, work on an easy project task.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "relax" && answer4 === "15min")
        return "Put your work aside and listen to music with your eyes away from the screen.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "relax" && answer4 === "30min")
        return "Rest comfortably, listen to music, or watch something light and funny.";

    if (answer1 === "home" && answer2 === "tired" && answer3 === "relax" && answer4 === "1hr")
        return "Give yourself time to recover. Enjoy a favourite show or take a proper rest.";

    // HOME + STRESSED
    if (answer1 === "home" && answer2 === "stressed" && answer3 === "study" && answer4 === "15min")
        return "Take a few calming minutes, then review one familiar concept without pressure.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "study" && answer4 === "30min")
        return "Break your study task into a small step and attempt just a few questions.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "study" && answer4 === "1hr")
        return "Start with a short reset, then focus on one priority instead of worrying about every subject.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "code" && answer4 === "15min")
        return "Choose a tiny coding task, such as fixing one error or revising a simple function.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "code" && answer4 === "30min")
        return "Work through one small bug slowly. You do not need to finish an entire feature.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "code" && answer4 === "1hr")
        return "Take a short break first, then work on one manageable project task if you feel ready.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "relax" && answer4 === "15min")
        return "Step away from your screen, breathe calmly, and listen to a favourite song.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "relax" && answer4 === "30min")
        return "Watch a comforting comedy scene or listen to music without thinking about unfinished tasks.";

    if (answer1 === "home" && answer2 === "stressed" && answer3 === "relax" && answer4 === "1hr")
        return "Enjoy a feel-good movie or a relaxing hobby. Give yourself permission to take a break.";

    // COLLEGE + HAPPY
    if (answer1 === "college" && answer2 === "happy" && answer3 === "study" && answer4 === "15min")
        return "Revise today's lecture notes or ask a classmate about one concept.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "study" && answer4 === "30min")
        return "Use a free period to review one lecture and practise a few questions.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "study" && answer4 === "1hr")
        return "Find a suitable study spot and work on an important subject or upcoming assignment.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "code" && answer4 === "15min")
        return "Practise a small JavaScript concept or mentally trace a DSA example.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "code" && answer4 === "30min")
        return "Review your project plan, practise a coding problem, or discuss a technical idea with a friend.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "code" && answer4 === "1hr")
        return "If you have a free period and a suitable place, work on your project or practise DSA.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "relax" && answer4 === "15min")
        return "Chat with a friend, take a short walk, or enjoy a little time away from coursework.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "relax" && answer4 === "30min")
        return "Spend time with friends, have a snack, or take a refreshing break between classes.";

    if (answer1 === "college" && answer2 === "happy" && answer3 === "relax" && answer4 === "1hr")
        return "Enjoy your free period with friends or do something entertaining before your next class.";

    // COLLEGE + TIRED
    if (answer1 === "college" && answer2 === "tired" && answer3 === "study" && answer4 === "15min")
        return "Review a few familiar notes rather than forcing yourself to learn a difficult topic.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "study" && answer4 === "30min")
        return "Sit somewhere comfortable and revise a small part of today's lecture.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "study" && answer4 === "1hr")
        return "Take a short break first, then use a quiet study spot if you feel able to concentrate.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "code" && answer4 === "15min")
        return "Read through a familiar code example or recall a few JavaScript methods.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "code" && answer4 === "30min")
        return "Plan one project improvement or review a DSA solution you have already studied.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "code" && answer4 === "1hr")
        return "Choose a comfortable place to review code, but rest if you are too tired to focus.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "relax" && answer4 === "15min")
        return "Sit down, drink some water, and give yourself a quiet break.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "relax" && answer4 === "30min")
        return "Take a proper break, have a snack if you need one, or chat with a friend.";

    if (answer1 === "college" && answer2 === "tired" && answer3 === "relax" && answer4 === "1hr")
        return "Use your free time to recover, eat something, or spend time with friends before travelling.";

    // COLLEGE + STRESSED
    if (answer1 === "college" && answer2 === "stressed" && answer3 === "study" && answer4 === "15min")
        return "Write down the one thing you need to understand next and review a small example.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "study" && answer4 === "30min")
        return "Choose one priority from your coursework and work on it without switching between subjects.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "study" && answer4 === "1hr")
        return "Make a short plan, then focus on one important topic in a quiet place.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "code" && answer4 === "15min")
        return "Review one simple coding example. Save difficult problems for when you can focus better.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "code" && answer4 === "30min")
        return "Break your coding task into smaller steps or discuss one problem with a classmate.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "code" && answer4 === "1hr")
        return "Choose one project or DSA task and work through it step by step, with a break if needed.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "relax" && answer4 === "15min")
        return "Step away from your work briefly and listen to a calming song.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "relax" && answer4 === "30min")
        return "Take a break with a friend or find a quiet place to reset before your next task.";

    if (answer1 === "college" && answer2 === "stressed" && answer3 === "relax" && answer4 === "1hr")
        return "Use this free time to decompress, eat, or spend time with friends instead of worrying continuously.";

    // TRAVELLING + HAPPY
    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "study" && answer4 === "15min")
        return "Recall a few points from your notes or use flashcards if it is safe and comfortable.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "study" && answer4 === "30min")
        return "Revise a familiar topic using downloaded notes, provided your journey allows it.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "study" && answer4 === "1hr")
        return "If seated safely, review lecture notes in short stretches. Otherwise, save studying for later.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "code" && answer4 === "15min")
        return "Mentally trace a small JavaScript example or recall how a method works.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "code" && answer4 === "30min")
        return "Plan the next feature of your website or review downloaded coding notes if comfortable.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "code" && answer4 === "1hr")
        return "Plan a project feature, think through a DSA problem, or listen to a coding lesson without needing to look at the screen.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "relax" && answer4 === "15min")
        return "Listen to your favourite songs and enjoy the journey.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "relax" && answer4 === "30min")
        return "Listen to music, an audio story, or an entertaining podcast.";

    if (answer1 === "travelling" && answer2 === "happy" && answer3 === "relax" && answer4 === "1hr")
        return "Enjoy your favourite music or an audio story while staying aware of your surroundings.";

    // TRAVELLING + TIRED
    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "study" && answer4 === "15min")
        return "Rest your mind instead of forcing revision during a tiring journey.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "study" && answer4 === "30min")
        return "Take a break and save demanding study for when you can concentrate properly.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "study" && answer4 === "1hr")
        return "Listen to a short recorded explanation if you feel like it, or simply rest during the journey.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "code" && answer4 === "15min")
        return "Rest your eyes and save hands-on coding for when you reach a suitable place.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "code" && answer4 === "30min")
        return "Relax or listen to a familiar coding explanation without putting pressure on yourself.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "code" && answer4 === "1hr")
        return "Give yourself time to recover during the journey. You can code later when you are rested.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "relax" && answer4 === "15min")
        return "Listen to a calming song and relax while remaining aware of your surroundings.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "relax" && answer4 === "30min")
        return "Take a quiet break or listen to something soothing.";

    if (answer1 === "travelling" && answer2 === "tired" && answer3 === "relax" && answer4 === "1hr")
        return "Make your journey restful with music or an audio story, and take care of your comfort.";

    // TRAVELLING + STRESSED
    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "study" && answer4 === "15min")
        return "Pause studying for now and take a few calm minutes.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "study" && answer4 === "30min")
        return "Listen to a familiar recorded lesson if that helps, or rest until you feel ready to study.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "study" && answer4 === "1hr")
        return "Use the journey to settle your thoughts. Choose one study priority for later rather than trying to do everything now.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "code" && answer4 === "15min")
        return "Think of one small coding task to do later and let yourself take a break for now.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "code" && answer4 === "30min")
        return "Listen to something relaxing or mentally plan a simple project feature without pressure.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "code" && answer4 === "1hr")
        return "Take the journey one step at a time. Save hands-on coding for a suitable place when you feel ready.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "relax" && answer4 === "15min")
        return "Listen to a favourite calming song and focus on relaxing for a few minutes.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "relax" && answer4 === "30min")
        return "Listen to music or an enjoyable audio story and give yourself a break from your worries.";

    if (answer1 === "travelling" && answer2 === "stressed" && answer3 === "relax" && answer4 === "1hr")
        return "Make the journey peaceful with music or an audio story. You can deal with your tasks after you arrive.";

    return "No matching recommendation found!";
}

