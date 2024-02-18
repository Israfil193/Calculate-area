function calculateRhombusArea(){
    const mostRadius1 = getInputValueById('rhombus-radius1');
    const mindRadius2 = getInputValueById('rhombus-radius2');
    const area = 0.5 * mostRadius1 * mindRadius2;
    setInnerTextById('rhombus-area', area);
}