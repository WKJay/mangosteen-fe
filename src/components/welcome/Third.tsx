import s from './WelcomeLayout.module.scss'
import chart from '../../assets/icons/chart.svg'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Third = () => (
    <WelcomeLayout>
        {{
            icon: () => <img src={chart} />,
            title: () => <h2>数据可视化<br />不遗漏每一笔账单</h2>,
            buttons: () => <>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink class={s.next} to="/welcome/4">下一页</RouterLink>
                <RouterLink to="/start">跳过</RouterLink>
            </>
        }}
    </WelcomeLayout>
)

Third.displayName = 'Third'
