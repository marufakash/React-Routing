import React from "react";
import style from './home.module.css';
import { useNavigate } from "react-router-dom";

const Contact =() => {
    const navigate = useNavigate();
    return (
        <div className={style.page}>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, autem rerum nulla ab saepe molestiae nobis perspiciatis laborum minima odio blanditiis laboriosam asperiores quia harum tempore suscipit a ratione corporis reprehenderit, natus error similique beatae cum? Saepe, debitis corrupti quae animi consectetur quisquam officia nisi accusamus eaque excepturi? Eaque nemo at quos, et sapiente excepturi quo facere esse error voluptatem expedita fuga quia? Eius obcaecati eos, veritatis ad sit odit provident qui necessitatibus aliquam voluptates id aspernatur dignissimos est similique. Hic, quas impedit. Maiores facere optio, minus, placeat alias deleniti sint enim veniam hic, corporis harum facilis cum obcaecati voluptatum qui odit quo illo veritatis neque libero ipsa. Nemo consequuntur illo consectetur laboriosam cupiditate, alias ipsa amet animi et beatae vel neque sapiente placeat soluta, iusto perspiciatis delectus! Magni officiis ratione est commodi sint, aperiam minima ipsum placeat dignissimos architecto facere exercitationem corporis, quisquam nemo voluptate quos iusto in excepturi nulla quidem laudantium laboriosam? Autem fuga dignissimos iure sed id error eius consectetur repudiandae, voluptatem ipsam deserunt recusandae dolorem pariatur dolore officia non! Magnam, et? Adipisci magni ab architecto soluta aperiam deleniti neque quo tempore asperiores quidem, perspiciatis nihil ratione? Ut fugiat voluptates molestiae sed esse blanditiis nesciunt! Soluta, quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam maxime quae, sunt nemo atque consequatur doloremque laudantium quod quo. Velit atque repellat saepe at consequuntur distinctio in ratione eaque officia corrupti possimus animi quos eius ducimus nulla labore enim, quas quidem laboriosam temporibus ad nostrum voluptate ipsa? Exercitationem error recusandae nesciunt rem repudiandae. Atque quia sunt, perferendis voluptas doloremque earum at itaque voluptatibus iure minima provident. Rerum quasi quod non, laborum quo, modi ipsam facilis et veritatis soluta corporis laudantium assumenda ea nostrum voluptatum debitis ipsa quaerat. Beatae praesentium voluptatum modi provident sequi, eum placeat reiciendis ea ex repudiandae?</p>
            <button onClick={() => navigate('/')}>Home Page</button>
            <button onClick={() => navigate('/blogs')}>Blogs Page</button>
        </div>
    )
}

export default Contact;