import { Button,ButtonsContain,SymbolButton,EqualButton} from "../../Styled-Components"
import * as math from 'mathjs';
export default function Buttons({setInput,input,}){
      const addNum = (e) => {
            setInput(input + e.target.value);
            
          };
          const borrarTodo = () => {
            setInput('');
          
          };
          const restar= () => {
            setInput(input.slice(0, -1));
          
          };
          const calc = () => {
            try {
              setInput(math.evaluate(input).toString());
            } catch (error) {
              setInput('Error');
            }
          };
    return(
      <>
      <ButtonsContain>
            <SymbolButton onClick={borrarTodo}>Clear</SymbolButton>
            <SymbolButton onClick={restar}>back</SymbolButton>
            <SymbolButton onClick={addNum}  value="/" >%  </SymbolButton>
            <SymbolButton onClick={addNum}  value="*" >x</SymbolButton>
      </ButtonsContain>
      <ButtonsContain>
            <Button onClick={addNum}  value="7">7</Button>
            <Button onClick={addNum}  value="8">8</Button>
            <Button onClick={addNum}  value="9" >9</Button>
            <SymbolButton onClick={addNum}  value="-">-</SymbolButton>
      </ButtonsContain>
      <ButtonsContain>
            <Button onClick={addNum}  value="4" >4</Button>
            <Button onClick={addNum}  value="5" >5</Button>
            <Button onClick={addNum}  value="6" >6</Button>
            <SymbolButton onClick={addNum}  value="+">+</SymbolButton>
      </ButtonsContain>
      <ButtonsContain>
            <Button onClick={addNum}  value="1" >1</Button>
            <Button onClick={addNum}  value="2" >2</Button>
            <Button onClick={addNum}  value="3">3</Button>
            <EqualButton onClick={calc}>=</EqualButton>
      </ButtonsContain>
      <ButtonsContain>
            <Button onClick={addNum}  value="0" >0</Button>
            <Button onClick={addNum}  value=".">,</Button>
            <Button onClick={addNum}  value="."></Button>
            <Button onClick={addNum}  value="."></Button>
      </ButtonsContain>
      </>
    )
}