<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ProgressBar from 'progressbar.js'

const isClockRunning = ref(false)
const focusSessionDuration = 1500
const breakSessionDuration = 300
let currentTimeLeftSession = ref(focusSessionDuration)
const currentMode = ref('focus')
let clockTimer = null
const timeSpentInCurrentSession = ref(0)
let progressBar = null

const startTimer = () => {
    if (!isClockRunning.value) {
        isClockRunning.value = true
        clockTimer = setInterval(() => {
            stepDown()
            displayCurrentTimeLeftSession()
            progressBar.set(calculateSessionProgress())
        }, 1000)
    }
}

const pauseTimer = () => {
    clearInterval(clockTimer)
    isClockRunning.value = false
}

const stopTimer = () => {
    clearInterval(clockTimer)
    isClockRunning.value = false
    resetTimer()
}

const resetTimer = () => {
    if (currentMode.value === 'focus') {
        currentTimeLeftSession = ref(focusSessionDuration)
    } else {
        currentTimeLeftSession = ref(breakSessionDuration)
    }
    timeSpentInCurrentSession.value = 0
    displayCurrentTimeLeftSession()
    progressBar.set(0)
}

const switchToFocusMode = () => {
    currentMode.value = 'focus'
    resetTimer()
}

const switchToBreakMode = () => {
    currentMode.value = 'break'
    resetTimer()
}

const stepDown = () => {
    if (currentTimeLeftSession.value > 0) {
        currentTimeLeftSession.value--
        timeSpentInCurrentSession.value++
    } else {
        clearInterval(clockTimer)
        isClockRunning.value = false
    }
}

const displayCurrentTimeLeftSession = () => {
    const secondsLeft = currentTimeLeftSession.value
    const seconds = secondsLeft % 60
    const minutes = Math.floor((secondsLeft % 3600) / 60)
    const hours = Math.floor(secondsLeft / 3600)

    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time
    }

    let formattedTime = ''
    if (hours === 0) {
        formattedTime = `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    } else {
        formattedTime = `${hours}:${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    }

    progressBar.text.innerText = formattedTime
}

const calculateSessionProgress = () => {
    const sessionDuration =
        currentMode.value === 'focus' ? focusSessionDuration : breakSessionDuration
    return timeSpentInCurrentSession.value / sessionDuration
}

onMounted(() => {
    progressBar = new ProgressBar.Circle('#pomodoro-timer', {
        strokeWidth: 2,
        text: {
            value: '25:00',
            style: {
                fontSize: '2rem',
                fontFamily: 'title',
                position: 'absolute',
                top: '50%',
                left: '50%',
                padding: 0,
                margin: 0,
                color: '#F8706E',
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            }
        },
        trailColor: '#F8706E'
    })

    // Initialisation du texte de la barre de progression
    if (progressBar.text) {
        progressBar.text.style.fontFamily = 'Raleway, Helvetica, sans-serif'
        progressBar.text.style.fontSize = '2rem'
    }

    progressBar.text.classList.add('timer-text')
})

onBeforeUnmount(() => {
    clearInterval(clockTimer)
})
</script>

<template>
    <div class="container">
        <div id="select-button">
            <h2 @click="switchToFocusMode" :class="{ active: currentMode === 'focus' }" id="select-focus">Focus Mode</h2>
            <h2 @click="switchToBreakMode" :class="{ active: currentMode === 'break' }" id="select-break">Break Mode</h2>
        </div>
        <div id="pomodoro-timer"></div>
        <div id="pomodoro-clock-actions">
            <button @click="startTimer" :class="{ 'button-active': isClockRunning }" id="start-btn">Démarrer</button>
            <button @click="pauseTimer" :class="{ 'button-active': !isClockRunning && timeSpentInCurrentSession.value > 0 }"
                id="pause-btn">Pause</button>
            <button @click="stopTimer" id="stop-btn">Arrêter</button>
        </div>
    </div>
</template>

<style scoped>
.active {
    box-shadow: #F8706E 0 1px 0, #F8706E 0 1px 0 inset;
    color: #F8706E;
}

.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

#select-button {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 50px;
}

#select-focus {
    font-family: 'Poppins-Bold', sans-serif;
    margin: 30px;
}

#select-break {
    font-family: 'Poppins-Bold', sans-serif;
    margin: 30px;
}

#select-focus:hover {
    cursor: pointer;
}

#select-break:hover {
    cursor: pointer;
}

#pomodoro-clock-actions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 25%;
    margin: 20px;
    background-color: rgb(25, 3, 75);
    border-radius: 7px;
}

#pomodoro-clock-actions button {
    background-color: rgb(25, 3, 75);
    border: none;
    border-radius: 4px;
    color: azure;
    padding: 6px 16px;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 14px;
}

#pomodoro-clock-actions button:hover {
    background-color: #cc5856;
    font-family: 'Poppins-Bold', sans-serif;
    cursor: pointer;
    border: none;
    color: azure;
}

.button-active {
    background-color: #cc5856;
    color: azure;
}
</style>
