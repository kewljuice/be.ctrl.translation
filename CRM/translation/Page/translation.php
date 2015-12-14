<?php

require_once 'CRM/Core/Page.php';

class CRM_translation_Page_translation extends CRM_Core_Page {
  function run() {
		
		// Translate page title	
		CRM_Utils_System::setTitle(ts("Translation from php double quotes", array('domain' => 'be.ctrl.translation')));
		
		$var1 = ts("Translation from php double quotes", array('domain' => 'be.ctrl.translation'));
		$var2 = ts('Translation from php single quotes', array('domain' => 'be.ctrl.translation'));
		
		$url = CRM_Utils_System::url() . "civicrm/ctrl/translation";
		$this->assign('url', $url);		
		
		$content = "<div>". ts('Translation from php single quotes', array('domain' => 'be.ctrl.translation')) ."</div>";
		$this-> assign('content', $content);
		
		parent::run();
  }
}
