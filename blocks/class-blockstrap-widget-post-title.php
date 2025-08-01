<?php

class BlockStrap_Widget_Post_Title extends WP_Super_Duper {


	public $arguments;

	/**
	 * Sets up the widgets name etc
	 */
	public function __construct() {

		$options = array(
			'textdomain'        => 'blockstrap',
			'output_types'      => array( 'block', 'shortcode' ),
			'block-icon'        => 'fas fa-heading',
			'block-category'    => 'layout',
			'block-keywords'    => "['heading','title','text']",
			'block-supports'    => array(
				'customClassName' => false,
			),
			'block-edit-return' => "!props.attributes.is_link ? el(props.attributes.html_tag ? props.attributes.html_tag : 'h1', wp.blockEditor.useBlockProps({
									dangerouslySetInnerHTML: {__html: 'Post Title' },
									style: sd_build_aui_styles(props.attributes),
									className: sd_build_aui_class(props.attributes),
								})) :
								el(props.attributes.html_tag ? props.attributes.html_tag : 'h1', wp.blockEditor.useBlockProps({
									//dangerouslySetInnerHTML: {__html: 'Post Title' },
									style: sd_build_aui_styles(props.attributes),
									className: sd_build_aui_class(props.attributes),
								}), el('a',{dangerouslySetInnerHTML: {__html: 'Post Title' },href: '#post-link', className: 'nav-link nav-link-' + props.attributes.text_color, style: sd_build_aui_styles(props.attributes)  }) )",
			'block-wrap'        => '',
			'class_name'        => __CLASS__,
			'base_id'           => 'bs_post_title',
			'name'              => __( 'BS > Post Title', 'blockstrap-page-builder-blocks' ),
			'widget_ops'        => array(
				'classname'   => 'bs-post-title',
				'description' => esc_html__( 'Displays the title of a post, page, or any other content-type.', 'blockstrap-page-builder-blocks' ),
			),
			'example'           => array(
				'attributes' => array(
					'after_text' => 'Earth',
				),
			),
			'no_wrap'           => true,
			'block_group_tabs'  => array(
				'content'  => array(
					'groups' => array( __( 'Title', 'blockstrap-page-builder-blocks' ) ),
					'tab'    => array(
						'title'     => __( 'Content', 'blockstrap-page-builder-blocks' ),
						'key'       => 'bs_tab_content',
						'tabs_open' => true,
						'open'      => true,
						'class'     => 'text-center flex-fill d-flex justify-content-center',
					),
				),
				'styles'   => array(
					'groups' => array( __( 'Typography', 'blockstrap-page-builder-blocks' ) ),
					'tab'    => array(
						'title'     => __( 'Styles', 'blockstrap-page-builder-blocks' ),
						'key'       => 'bs_tab_styles',
						'tabs_open' => true,
						'open'      => true,
						'class'     => 'text-center flex-fill d-flex justify-content-center',
					),
				),
				'advanced' => array(
					'groups' => array( __( 'Wrapper Styles', 'blockstrap-page-builder-blocks' ), __( 'Advanced', 'blockstrap-page-builder-blocks' ) ),
					'tab'    => array(
						'title'     => __( 'Advanced', 'blockstrap-page-builder-blocks' ),
						'key'       => 'bs_tab_advanced',
						'tabs_open' => true,
						'open'      => true,
						'class'     => 'text-center flex-fill d-flex justify-content-center',
					),
				),
			),
		);

		parent::__construct( $options );
	}

	/**
	 * Set the arguments later.
	 *
	 * @return array
	 */
	public function set_arguments() {

		$arguments = array();

		$arguments['html_tag'] = array(
			'type'     => 'select',
			'title'    => __( 'HTML tag', 'blockstrap-page-builder-blocks' ),
			'options'  => array(
				'h1'   => 'h1',
				'h2'   => 'h2',
				'h3'   => 'h3',
				'h4'   => 'h4',
				'h5'   => 'h5',
				'h6'   => 'h6',
				'span' => 'span',
				'div'  => 'div',
				'p'    => 'p',
			),
			'default'  => 'h1',
			'desc_tip' => true,
			'group'    => __( 'Title', 'blockstrap-page-builder-blocks' ),
		);

		$arguments['is_link'] = array(
			'type'     => 'checkbox',
			'title'    => __( 'Link to post', 'blockstrap-page-builder-blocks' ),
			'default'  => '',
			'value'    => '1',
			'desc_tip' => false,
			'group'    => __( 'Title', 'blockstrap-page-builder-blocks' ),
		);

		$arguments['stretched_link'] = array(
			'type'            => 'checkbox',
			'title'           => __( 'Stretched link', 'blockstrap-page-builder-blocks' ),
			'desc'            => __( 'This expands the link to the first container with position relative (used to make a whole area clickable)', 'blockstrap-page-builder-blocks' ),
			'default'         => '',
			'value'           => '1',
			'desc_tip'        => false,
			'group'           => __( 'Title', 'blockstrap-page-builder-blocks' ),
			'element_require' => '[%is_link%]',
		);

		// text color
		$arguments = $arguments + sd_get_text_color_input_group();

		// font size
		$arguments = $arguments + sd_get_font_size_input_group();

		// line height
		$arguments['font_line_height'] = sd_get_font_line_height_input();

		// font weight
		$arguments['font_weight'] = sd_get_font_weight_input();

		// Text justify
		$arguments['text_justify'] = sd_get_text_justify_input();

		// text align
		$arguments['text_align']    = sd_get_text_align_input(
			'text_align',
			array(
				'device_type'     => 'Mobile',
				'element_require' => '[%text_justify%]==""',
			)
		);
		$arguments['text_align_md'] = sd_get_text_align_input(
			'text_align',
			array(
				'device_type'     => 'Tablet',
				'element_require' => '[%text_justify%]==""',
			)
		);
		$arguments['text_align_lg'] = sd_get_text_align_input(
			'text_align',
			array(
				'device_type'     => 'Desktop',
				'element_require' => '[%text_justify%]==""',
			)
		);

		// background
		$arguments = $arguments + sd_get_background_inputs( 'bg', array( 'group' => __( 'Wrapper Styles', 'blockstrap-page-builder-blocks' ) ), array( 'group' => __( 'Wrapper Styles', 'blockstrap-page-builder-blocks' ) ), array( 'group' => __( 'Wrapper Styles', 'blockstrap-page-builder-blocks' ) ), false );

		$arguments['bg_on_text'] = array(
			'type'            => 'checkbox',
			'title'           => __( 'Background on text', 'blockstrap-page-builder-blocks' ),
			'default'         => '',
			'value'           => '1',
			'desc_tip'        => false,
			'desc'            => __( 'This will show the background on the text.', 'blockstrap-page-builder-blocks' ),
			'group'           => __( 'Wrapper Styles', 'blockstrap-page-builder-blocks' ),
			'element_require' => '[%bg%]=="custom-gradient"',
		);

		// margins mobile
		$arguments['mt'] = sd_get_margin_input( 'mt', array( 'device_type' => 'Mobile' ) );
		$arguments['mr'] = sd_get_margin_input( 'mr', array( 'device_type' => 'Mobile' ) );
		$arguments['mb'] = sd_get_margin_input( 'mb', array( 'device_type' => 'Mobile' ) );
		$arguments['ml'] = sd_get_margin_input( 'ml', array( 'device_type' => 'Mobile' ) );

		// margins tablet
		$arguments['mt_md'] = sd_get_margin_input( 'mt', array( 'device_type' => 'Tablet' ) );
		$arguments['mr_md'] = sd_get_margin_input( 'mr', array( 'device_type' => 'Tablet' ) );
		$arguments['mb_md'] = sd_get_margin_input( 'mb', array( 'device_type' => 'Tablet' ) );
		$arguments['ml_md'] = sd_get_margin_input( 'ml', array( 'device_type' => 'Tablet' ) );

		// margins desktop
		$arguments['mt_lg'] = sd_get_margin_input( 'mt', array( 'device_type' => 'Desktop' ) );
		$arguments['mr_lg'] = sd_get_margin_input( 'mr', array( 'device_type' => 'Desktop' ) );
		$arguments['mb_lg'] = sd_get_margin_input(
			'mb',
			array(
				'device_type' => 'Desktop',
				'default'     => 3,
			)
		);
		$arguments['ml_lg'] = sd_get_margin_input( 'ml', array( 'device_type' => 'Desktop' ) );

		// padding
		$arguments['pt'] = sd_get_padding_input( 'pt', array( 'device_type' => 'Mobile' ) );
		$arguments['pr'] = sd_get_padding_input( 'pr', array( 'device_type' => 'Mobile' ) );
		$arguments['pb'] = sd_get_padding_input( 'pb', array( 'device_type' => 'Mobile' ) );
		$arguments['pl'] = sd_get_padding_input( 'pl', array( 'device_type' => 'Mobile' ) );

		// padding tablet
		$arguments['pt_md'] = sd_get_padding_input( 'pt', array( 'device_type' => 'Tablet' ) );
		$arguments['pr_md'] = sd_get_padding_input( 'pr', array( 'device_type' => 'Tablet' ) );
		$arguments['pb_md'] = sd_get_padding_input( 'pb', array( 'device_type' => 'Tablet' ) );
		$arguments['pl_md'] = sd_get_padding_input( 'pl', array( 'device_type' => 'Tablet' ) );

		// padding desktop
		$arguments['pt_lg'] = sd_get_padding_input( 'pt', array( 'device_type' => 'Desktop' ) );
		$arguments['pr_lg'] = sd_get_padding_input( 'pr', array( 'device_type' => 'Desktop' ) );
		$arguments['pb_lg'] = sd_get_padding_input( 'pb', array( 'device_type' => 'Desktop' ) );
		$arguments['pl_lg'] = sd_get_padding_input( 'pl', array( 'device_type' => 'Desktop' ) );

		// border
		$arguments['border']         = sd_get_border_input( 'border' );
		$arguments['border_type']    = sd_get_border_input( 'type' );
		$arguments['border_width']   = sd_get_border_input( 'width' ); // BS5 only
		$arguments['border_opacity'] = sd_get_border_input( 'opacity' ); // BS5 only
		$arguments['rounded']        = sd_get_border_input( 'rounded' );
		$arguments['rounded_size']   = sd_get_border_input( 'rounded_size' );

		// shadow
		$arguments['shadow'] = sd_get_shadow_input( 'shadow' );

		// position
		$arguments['position'] = sd_get_position_class_input( 'position' );

		$arguments['sticky_offset_top']    = sd_get_sticky_offset_input( 'top' );
		$arguments['sticky_offset_bottom'] = sd_get_sticky_offset_input( 'bottom' );

		$arguments['display']    = sd_get_display_input( 'd', array( 'device_type' => 'Mobile' ) );
		$arguments['display_md'] = sd_get_display_input( 'd', array( 'device_type' => 'Tablet' ) );
		$arguments['display_lg'] = sd_get_display_input( 'd', array( 'device_type' => 'Desktop' ) );

		$arguments['css_class'] = sd_get_class_input();

		if ( function_exists( 'sd_get_custom_name_input' ) ) {
			$arguments['metadata_name'] = sd_get_custom_name_input();
		}

		return $arguments;
	}


	/**
	 * This is the output function for the widget, shortcode and block (front end).
	 *
	 * @param array $args The arguments values.
	 * @param array $widget_args The widget arguments when used.
	 * @param string $content The shortcode content argument
	 *
	 * @return string
	 */
	public function output( $args = array(), $widget_args = array(), $content = '' ) {
		// Makes sure the GD SEO title filter is called
		if ( function_exists( 'geodir_is_page' ) && ( geodir_is_page( 'single' ) || geodir_is_page( 'preview' ) ) ) {
			if ( GeoDir_SEO::yoast_enabled() || GeoDir_SEO::rank_math_enabled() || ( method_exists( 'GeoDir_SEO', 'aioseo_enabled' ) && GeoDir_SEO::aioseo_enabled() ) ) {
				// Yoast/Rank Math enabled.
			} else {
				GeoDir_SEO::set_meta();
			}
		}

		$title = get_the_title();

		if ( $title ) {
			$tag          = ! empty( $args['html_tag'] ) ? esc_attr( $args['html_tag'] ) : 'h2';
			$allowed_tags = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p' );
			$tag          = in_array( $tag, $allowed_tags, true ) ? esc_attr( $tag ) : 'h2';

			/**
			 * A GeoDirectory filter to adjust the tag if based inside a GD Listings loop
			 */
			$tag          = apply_filters( 'geodir_widget_gd_post_title_tag', $tag, $args, $widget_args, $this );

			// Unset custom color when color class already set.
			if ( ! empty( $args['text_color'] ) && $args['text_color'] != 'custom' ) {
				$args['text_color_custom'] = '';
			}

			// Unset custom font size when color class already set.
			if ( ! empty( $args['font_size'] ) && $args['font_size'] != 'custom' ) {
				$args['font_size_custom'] = '';
			}

			$classes      = sd_build_aui_class( $args );
			$class        = $classes ? 'class="' . $classes . '"' : '';
			$styles       = sd_build_aui_styles( $args );
			$style        = $styles ? ' style="' . $styles . '"' : '';

			$wrapper_attributes = $class . $style;

			if ( $args['is_link'] ) {
				$class  = $args['text_color'] ? 'link-' . esc_attr( $args['text_color'] ) : '';
				$class .= ! empty( $args['stretched_link'] ) ? ' stretched-link' : '';
				$link   = get_permalink();
				$title  = sprintf(
					'<a href="%1$s" class="%2$s" %3$s>%4$s</a>',
					$link,
					$class,
					$style,
					$title
				);
			}
		}

		return $title ? sprintf(
			'<%1$s %2$s>%3$s</%1$s>',
			$tag,
			$wrapper_attributes,
			$title
		) : '';
	}
}

// register it.
add_action(
	'widgets_init',
	function () {
		register_widget( 'BlockStrap_Widget_Post_Title' );
	}
);
