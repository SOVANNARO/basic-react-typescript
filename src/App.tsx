import './App.css';
import { Greet } from "./components/props/Greet";
import { Person } from "./components/props/Person";
import { PersonList } from "./components/props/PersonList";
import { Status } from "./components/props/Status";
import { Oscar } from "./components/props/Oscar";
import { Heading } from "./components/props/Heading";
import { Button } from "./components/props/Button";
import { Container } from "./components/props/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { nameList, personName } from "./data/data";
import { UserContextProvider } from "./components/context/UserContext";
import { UserLoginContext } from "./components/context/UserLoginContext";
import { DomRef } from "./components/ref/DomRef";
import { CounterClass } from "./components/class/CounterClass";
import { List } from "./components/generics/List";
import { Toast } from "./components/templateliterals/Toast";
import { ButtonCustom } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";
import { UseStateObject } from "./components/hook/useState/UseStateObject";
import { UseStateArray } from "./components/hook/useState/UseStateArray";
import { ConditionRunEffects } from "./components/hook/useEffect/ConditionRunEffects";
import { ComponentMain } from "./components/hook/useContext/ComponetMain";
import { FetchById } from "./components/hook/useEffect/FetchById";

function App() {

    return (
        <div>
            <div style={{display: 'flex'}}>
                <div>
                    <Container styles={{border: "1px solid black", padding: "1rem"}} />
                    <Greet name={"Naro"} messageCount={20} isLoggedIn={false}/>
                    <Person name={personName}/>
                    <PersonList names={nameList}/>
                </div>
                <div>
                    <Status status={"loading"}/>
                    <Oscar>
                        <Heading>Heading</Heading>
                    </Oscar>
                    <Button handleClick={(event) => {
                        console.log("Button clicked", event)
                    }}/>
                    <LoggedIn />
                </div>
                <div>
                    <User />
                    <Counter />
                    <ThemeContextProvider>
                        <Box />
                    </ThemeContextProvider>
                    <UserContextProvider>
                        <UserLoginContext />
                    </UserContextProvider>
                </div>
                <div>
                    <DomRef />
                    <CounterClass message="Counter: " />
                    <List items={nameList} onClick={(item) => console.log(item)} />
                </div>
                <div style={{paddingLeft: '10px'}}>
                    <Toast position={"left-center"} />
                    <ButtonCustom variant='primary' onClick={() => console.log('Clicked')}>
                        Primary Button
                    </ButtonCustom>
                    <CustomComponent name={"Sovannaro"} messageCount={10} isLoggedIn={true}/>
                    <Text as="h1" size="lg" color="primary">
                        Heading
                    </Text>
                    <Text isHeading={false} as="p" size="md" color="secondary">
                        Paragraph
                    </Text>
                    <Text isHeading={false} as="label" htmlFor="someId" size="sm" color="primary">
                        Label
                    </Text>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div>
                    <UseStateObject />
                    <UseStateArray />
                    <ConditionRunEffects />
                    <FetchById />
                </div>
                <div style={{paddingLeft: '40px'}}>
                    <ComponentMain />
                </div>
            </div>
        </div>
    );
}

export default App;
