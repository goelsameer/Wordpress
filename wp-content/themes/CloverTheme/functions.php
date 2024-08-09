<?php
function clover_theme_enqueue_scripts() {
    error_log('Enqueue function called.');
    $theme_version = wp_get_theme()->get('Version');

    // Enqueue Styles with version number
    wp_enqueue_style('clover-style', get_template_directory_uri() . '/style.css', array(), $theme_version);
    error_log('Enqueued style.css');
    
    // Enqueue global scripts
    wp_enqueue_script('clover-theme-script', get_template_directory_uri() . '/scripts.js', array('jquery'), null, true);
    wp_localize_script('clover-theme-script', 'cloverTheme', array(
        'templateUrl' => get_template_directory_uri()
    ));
    error_log('Enqueued scripts.js');
}

function clover_theme_enqueue_thank_you_scripts() {
    if (is_page('thank-you-179')) { // Replace 'thank-you-179' with your actual thank you page slug
        wp_enqueue_script('clover-thankyou-script', get_template_directory_uri() . '/scriptThankyou.js', array('jquery'), null, true);
        wp_localize_script('clover-thankyou-script', 'cloverTheme', array(
            'templateUrl' => get_template_directory_uri()
        ));
        error_log('Enqueued scriptThankyou.js for thank-you page');
    }
}

add_action('wp_enqueue_scripts', 'clover_theme_enqueue_scripts');
add_action('wp_enqueue_scripts', 'clover_theme_enqueue_thank_you_scripts');

// No need to modify this function unless you need it for other purposes
function create_thank_you_page() {
    // Check if the page already exists
    $page = get_page_by_path('thank-you-179');
    if ($page) {
        // If the page exists, update its template
        update_post_meta($page->ID, '_wp_page_template', 'template-thank-you.php');
        return;
    }
}

add_action('after_setup_theme', 'create_thank_you_page');

?>