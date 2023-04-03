import React from 'react'

function Community() {

    const posts = [
        {
            id: 1,
            title: 'Market Corner',
            subtitle: 'OPERATIONS & RESOURCES',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    
            imageUrl:
                    'https://foodie.sysco.com/wp-content/uploads/2020/12/Market-Corner-Image-300x415-1.jpg',
            },
        {
            id: 1,
            title: 'Inflation Buster',
            subtitle: 'FOOD SERVICE UPDATE',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    
            imageUrl:
                    'https://foodie.sysco.com/wp-content/uploads/2021/06/Inflation-Busters-300x415-with-title-and-border.png',
            },
        {
            id: 1,
            title: 'Recipes and Resources',
            subtitle: 'AMERICAN RESTAURANT',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    
            imageUrl:
                    'https://foodie.sysco.com/wp-content/uploads/2022/08/Untitled-design-61.png',
            },
        {
            id: 1,
            title: 'Hinded Foam Containers',
            subtitle: 'FOOD SERVICE UPDATE',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    
            imageUrl:
                    'https://foodie.sysco.com/wp-content/uploads/2021/05/Foam-Containers-300x415-with-title-and-border-1.png',
            },
        // More posts...
    ];


    return (
        <div>
            <div class="container-fluid">
                <h2>Foorservice Update</h2>
                <p>Stay informed of current supply and demand changes in the market</p>
                <div className='green-line'></div>
                <div class="row">
                    {
                        posts.map(post => (
                            <div class="col">
                                <img src={post.imageUrl}></img>
                                <h4>{post.subtitle}</h4>
                                <h3>{post.title}</h3>                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Community
