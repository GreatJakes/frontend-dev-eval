import styled from 'styled-components'
import box    from './box.png'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
}             from './Elements'

const Challenge1 = () => {
    return (
        <ChallengeWrapper>
            <ChallengeHeading>Challenge 1</ChallengeHeading>
            <Description>Use only CSS to style SingleDiv to look like the image.</Description>
            <div>
                <img src={box} width="auto" height="auto" alt=""/>
                <SingleDiv/>
            </div>
        </ChallengeWrapper>
    )
}

const SingleDiv = styled.div`
  background-color: red;
  width: 5px;
  height: 5px;
`

export default Challenge1