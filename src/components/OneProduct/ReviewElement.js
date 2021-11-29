import styled from 'styled-components';

export const ReviewContainer = styled.div`
    background-color: #EEEEEE;
    height: 700px;
    width: 1000px;
    margin: auto;
    margin-top: 70px;
    position: relative;
    top: -350px;
    .rating{
        background-color: #EEEEEE;
        padding-left: 40px;
    }
    .title {
        padding: 20px;
        font-size: 30px;
        font-weight: bold;
    }

    .rating-num {  
        font-size: 50px;
        font-weight: bold;
    }

`

export const Review = styled.div`
    background-color: #EEEEEE;
    width: 90%;
    height:130px;
    border-bottom: 2px rgba(0, 0, 0, 0.5) solid;
    padding: 20px;
    display: box;
    margin: auto;

`
export const RatingContainer = styled.div`
    width: 1000px;
    margin: 80px auto;
    display: grid;
    grid-template-columns: auto;
    padding: 50px 0;
    background-color: #EEEEEE;
    gap: 15px;
    position: relative;
    top: -350px;
`
export const RatingItem = styled.div`
    text-align: center;
    padding: 15px 0;
    font-size: 18px;
`