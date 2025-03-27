import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 100%;
    height: 70px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Title = styled.div`
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    font-family: "Monsterrat", sans-serif;
    margin-left: 20px;
`;

const CartContainer = styled.div`
    position: relative; 
    cursor: pointer;
    margin-right: 20px;
    margin-top: 10px;
`;

const CartIcon = styled.img`
    height: 30px;
    width: 30px;
`;


const CartCount = styled.span`
    position: absolute;
    top: -10px;
    right: -12px;
    background-color: ${props => props.color};
    border-radius: 50%;
    padding: 5px 10px;
    color: #000;
    font-size: 10px;
    font-weight: 600;
    visibility: ${props => props.$cartcount === 0 ? "hidden" : "visible"};
`;

export default function Navbar(props){
    const {cartCount} = props;
    return (<>
    <Nav>
        <Title>FLiX</Title>
        <CartContainer>
            <CartIcon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
            <CartCount color="yellow" $cartcount={cartCount}>{cartCount}</CartCount>
        </CartContainer> 
    </Nav>
    </>)
};

// const styles = {
//     navbar: {
//         // width: "100%",
//         height: 70,
//         backgroundColor: "#000",
//         color: "#fff",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "relative",
//     },
//     navTitle: {
//         fontSize: "40px",
//         color: "#fff",  
//         fontWeight: "600",
//         fontFamily: '"Monsterrat", sans-serif',
//         // textTransform: "uppercase",
//         marginLeft: "20px"
//     },
//     cartContainer:{
//         position: "relative",
//         cursor: "pointer",
//         marginRight: "20px",
//         marginTop: "10px"
//     },
//     cartIcon:{
//         height: "30px",
//         width: "30px"
//     },
//     cartCount:{
//         position: "absolute",
//         top: "-10px",
//         right: "-12px",
//         backgroundColor: "red",
//         borderRadius: "50%",
//         padding: "5px 10px",
//         color: "#fff",
//         fontSize: "10px",
//         fontWeight: "600"
//     }};