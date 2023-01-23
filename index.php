<?php get_header();?>
<main>
        <?php if (have_posts()):?>
            <?php while (have_posts()):the_post();?>
            <div>
                <?php the_content();?>
            </div>
            <?php endwhile?>
        <?php endif?>
    </main>
    <?php get_footer();?>
</body>
</html>