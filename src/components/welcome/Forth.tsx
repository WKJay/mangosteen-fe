import s from './WelcomeLayout.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Forth = () => (
    <WelcomeLayout>
        {{
            icon: () => <img src={cloud} />,
            title: () => <h2>云端同步<br />不遗漏每一笔账单</h2>,
            buttons: () => <>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink to="/start">完成</RouterLink>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            </>
        }}
    </WelcomeLayout>
)

Forth.displayName = 'Forth'
