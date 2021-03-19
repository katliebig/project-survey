import React, { useState } from 'react'
import data from "./data.json"

import TextInput from "./components/TextInput"
import SelectInput from './components/SelectInput'
import RadioInput from './components/RadioInput'
import NumberInput from './components/NumberInput'
import RadioInputIcon from './components/RadioInputIcon'
import RangeInput from './components/RangeInput'
import NavigateButton from 'components/NavigateButton'
import ReturnButton from 'components/ReturnButton'
import SubmitButton from 'components/SubmitButton'
import CharacterSheet from './components/CharacterSheet'
import ProgressBar from 'components/ProgressBar'


const App = () => {
  const [renderSummary, setRenderSummary] = useState(false)
  const [section, setSection] = useState(0)
  const [name, setName] = useState("")
  const [characterClass, setCharacterClass] = useState("")
  const [race, setRace] = useState("")
  const [number, setNumber] = useState("")
  const [family, setFamily] = useState("")
  const [goal, setGoal] = useState("")
  const [icon, setIcon] = useState("")
  const [str, setStr] = useState("")
  const [int, setInt] = useState("")
  const [dex, setDex] = useState("")
  const [chr, setChr] = useState("")

  const isComplete = () => {
    if (name === "") {
      return false
    }
    if (characterClass === "") {
      return false
    }
    if (race === "") {
      return false
    }
    if (number === "") {
      return false
    }
    if (family === "") {
      return false
    }
    if (goal === "") {
      return false
    }
    if (icon === "") {
      return false
    }
    if (str === "") {
      return false
    }
    if (int === "") {
      return false
    }
    if (dex === "") {
      return false
    }
    if (chr === "") {
      return false
    }
    else {
      return true
    }
  }

  if (renderSummary) {
    return (
      <>
        <CharacterSheet
          name={name}
          race={race}
          class={characterClass}
          number={number}
          family={family}
          goal={goal}
          icon={icon}
          str={str}
          int={int}
          dex={dex}
          chr={chr}
        />
        <ReturnButton
          text="Go back"
          renderSummary={renderSummary}
          setRenderSummary={setRenderSummary}
          isComplete={isComplete}
          setSection={setSection}
        />
      </>
    )
  } else {
    return (
      <>
        <form
          className="form"
          onSubmit={(event) => event.preventDefault()}
        >
          <h1>Character Creator</h1>
          {data.section[section] === "firstSection" &&
            <TextInput
              text={name}
              setText={setName}
              data={data.name}
            />}

          {data.section[section] === "secondSection" &&
            <SelectInput
              choice={characterClass}
              setChoice={setCharacterClass}
              data={data.class}
            />}

          {data.section[section] === "thirdSection" &&
            <RadioInput
              choice={race}
              setChoice={setRace}
              data={data.race}
            />}

          {data.section[section] === "fourthSection" &&
            <TextInput
              text={goal}
              setText={setGoal}
              data={data.goal}
            />}

          {data.section[section] === "fifthSection" &&
            <NumberInput
              number={number}
              setNumber={setNumber}
              data={data.age}
            />}

          {data.section[section] === "sixthSection" &&
            <SelectInput
              choice={family}
              setChoice={setFamily}
              data={data.family}
            />}

          {data.section[section] === "seventhSection" &&
            <RadioInputIcon
              choice={icon}
              setChoice={setIcon}
              data={data.icon}
            />}

          {data.section[section] === "eighthSection" &&
            <div className="stats-container">
              <h2>Stats</h2>
              <RangeInput
                value={str}
                setValue={setStr}
                data={data.stats.strength}
              />
              <RangeInput
                value={int}
                setValue={setInt}
                data={data.stats.intelligence}
              />
              <RangeInput
                value={dex}
                setValue={setDex}
                data={data.stats.dexterity}
              />
              <RangeInput
                value={chr}
                setValue={setChr}
                data={data.stats.charisma}
              />
            </div>}

          <div className="button-container">

            {data.section[section] !== "firstSection" &&
              <NavigateButton
                text="Previous Question"
                source="./assets/arrow-left.svg"
                goNext={false}
                section={section}
                setSection={setSection}
              />}

            {data.section[section] !== "eighthSection" &&
              <NavigateButton
                text="Next Question"
                source="./assets/arrow-right.svg"
                goNext={true}
                section={section}
                setSection={setSection}
              />}

            <SubmitButton
              text="Submit"
              renderSummary={renderSummary}
              setRenderSummary={setRenderSummary}
              isComplete={isComplete}
              section={section}
              setSection={setSection}
            />

          </div>

          <ProgressBar progress={data.section[section]} section={data.section} />

        </form>
      </>
    )
  }
}

export default App