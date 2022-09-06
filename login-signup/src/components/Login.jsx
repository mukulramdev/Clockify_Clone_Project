import {Inputdiv,Termdiv,Ordiv,Span , Button ,Input,Checkbox,TermSpan,ButtonImg,UlDive,Tring,LoginPhotoDive,LoginSide,Loginnewspan,LoginPagePhoto} from './Signup_style'
import { LoginNav } from './loginnav';

export const Login = ()=>{
    return <LoginPhotoDive>
        <div>
        <LoginNav/>
       <Inputdiv>
        <h1>Login</h1>
        <Input type="text" placeholder='Enter email'/>
        <Input type="text" placeholder='Enter password'/>
        <Termdiv>
            <Checkbox type="checkbox"/>
            <p>Stay logged in <TermSpan>       Forgot password?</TermSpan></p>
        </Termdiv>
        <Button color='white' bacground= "blue">LOG IN</Button>
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
        <TermSpan>Security Privacy</TermSpan>
       </UlDive>
        </div>
        <LoginSide>
        <Loginnewspan>NEW</Loginnewspan>
        <h1>Scheduling</h1>
        <p>Visualize projects on a timeline and plan team's capacity (see who's busy and who's available).</p>
        <Button color="white" bacground= "black" border="none">SEE HOW IT WORKS</Button>
        <LoginPagePhoto src="https://app.clockify.me/assets/features-info/scheduling-promo.webp" alt="loginemage" />
        </LoginSide>
    </LoginPhotoDive>
}