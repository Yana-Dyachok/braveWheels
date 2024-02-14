import styled from "styled-components";

export const ErrorWrapper = styled.div`
    padding: 200px 5px 5px;
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.smallPhone}px) {
        padding: 200px 0 5px;
    }
`;

export const ErrorContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.bigScreen}px) {
    }
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
        grid-template-columns: 55% 45%;
    }
    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.tablet}px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

export const ErrorInfo = styled.div`
    & h1 {
        padding-bottom: 42px;
        text-align: center;
        line-height: 1.46;
        font-size: 60px;
        color: ${({ theme }) => theme.palette.brown};
    }
    & h4 {
        color: ${({ theme }) => theme.palette.brown};
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
        & h4 {
            padding: 0 0 30px 30px;
        }
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        & h1 {
            font-size: 38px;
        }

        & h4 {
            padding: 0 0 80px;
            font-size: 20px;
        }
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.smallPhone}px) {
        & h4 {
            padding: 0 0 40px;
        }
    }
`;

export const ErrorPicture = styled.div`
    & img {
        width: 730px;
        height: 586px;
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
        & img {
            width: 528px;
            height: 436px;
        }
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.tablet}px) {
        & img {
            width: 730px;
            height: 586px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        & img {
            width: 440px;
            height: 360px;
        }
    }

    @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.smallPhone}px) {
        & img {
            width: 321px;
            height: 263px;
        }
    }
`;

export const ErrorButton = styled.div`
    margin: -200px 0 0 110px;
    button {
        width: 304px;
        height: 65px;
        font-size: 24px;
        line-height: 1.37;

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.bigScreen}px) {
            margin: 100px 0 0;
        }

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.laptop}px) {
            margin: 200px 0 0;
        }

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.phone}px) {
                display: flex;
                justify-content: center;
                align-items: center;
        }

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.smallPhone}px) {
              
    }
`;
