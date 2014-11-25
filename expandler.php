<?php
	/*
	Plugin Name: Expandler
	Plugin URI:	https://bitbucket.org/atroxell/expandler
	Description: A VERY simple Wordpress plugin to make menu management a bit easier with expandable sub-menu items. This plugin requires the GitHub Updater plugin in order to apply updates.
	Version: 1.1.0
	Author: AJ Troxell
	License: GNU General Public License v2
	License URI: http://www.gnu.org/licenses/gpl-2.0.html
	Domain Path: /languages
	Text Domain: expandler
	Bitbucket Plugin URI: https://bitbucket.org/atroxell/expandler
	Bitbucket Branch: master
	*/

	function expandler($hook) {
	    if ( 'nav-menus.php' != $hook ) {
	        return;
	    }
	    wp_enqueue_script( 'expandler', plugin_dir_url( __FILE__ ) . 'expandler.js' );
	    wp_enqueue_style( 'expandler', plugin_dir_url( __FILE__ ) . 'expandler.css' );
	}
	add_action( 'admin_enqueue_scripts', 'expandler' );

?>
