import {Div,Inputdiv,Termdiv,Ordiv,Span , Button ,Input,Checkbox,TermSpan,ButtonImg,UlDive,Tring} from './Signup_style'
import { LoginNav } from './loginnav';
export const Signup = ()=>{
    return<div>
        <LoginNav/>
        <Div>
       <div>Get started with Clockify</div>
       <p>Create a free account to start tracking time and supercharge your productivity.</p>
       <div>
        <span>No credit card required</span>
        <span> . </span>
        <span>Unsubscribe at any time</span>
       </div>
       </Div>
       <Inputdiv>
        <h1>Sign up</h1>
        <Input type="text" placeholder='Enter email'/>
        <Input type="text" placeholder='Choose password'/>
        <Termdiv>
            <Checkbox type="checkbox"/>
            <p>I agree to the <TermSpan>Terms of Use</TermSpan></p>
        </Termdiv>
        <Button color='white' bacground= "blue">CREATE FREE ACCOUNT</Button>
        <Ordiv>
           <hr />
           <Span>OR</Span>
        </Ordiv>
        <Button>
            <ButtonImg src="https://app.clockify.me/assets/ui-icons/icon-google.svg" alt="" />
             Continue with Google
        </Button>
       </Inputdiv>
       <UlDive>
       <img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="" />
       <span>English</span>
       <Tring />
       </UlDive>
       <UlDive>
        <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="" />
        <span>Your data is safe with us:</span>
        <TermSpan>Security</TermSpan>
        <TermSpan>Privacy</TermSpan>
       </UlDive>
    </div>
}