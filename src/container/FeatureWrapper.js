import styled from "styled-components";

export const FeatureWrapper = styled.div`
    .postcard {
        position: relative;
        display: flex;
        flex-flow: column;
        width: 100%;
        height: 100%;
    }
    .postcard img {
        width: 100%;
        height: 100%;
    }
    .card-title {
        align-self: flex-start;
    }
    .card:hover {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        color: blue;
    }
`
