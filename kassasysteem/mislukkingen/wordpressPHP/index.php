<?php 
/*
Template Name: Restuarant Menu Template
 */
get_header(); ?>

	<div id="primary" class="content-area">
	  
		<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post(); ?>

		
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<header class="entry-header">
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			</header><!-- .entry-header -->

			<div class="entry-content">


			<?php if ( have_rows('menu_sections') ):
				while ( have_rows('menu_sections') ): the_row(); ?>

					<h2><?php the_sub_field('section_title'); ?></h2>
					
					<?php if ( have_rows('section_items') ): ?>
						
						<table>

							<thead>
								<tr>
									<td>Name</td>
									<td>Description</td>
									<td>Price</td>
								</tr>
							</thead>

						<?php while ( have_rows('section_items') ): the_row(); ?>

							<tr>
								<td><?php the_sub_field('dish_name'); ?></td>
								<td><?php the_sub_field('dish_description'); ?></td>
								<td>$<?php the_sub_field('dish_price'); ?></td>
							</tr>

						<?php endwhile; ?>
					
						</table>

					<?php endif; ?>

				<?php endwhile;
			endif; ?>

				
			</div><!-- .entry-content -->

		</article><!-- #post-## -->



 		<?php endwhile; // End the loop. ?>

		</main><!-- .site-main -->
		
	</div><!-- .content-area -->

<?php get_footer(); ?>