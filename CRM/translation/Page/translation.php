<?php

require_once 'CRM/Core/Page.php';

class CRM_translation_Page_translation extends CRM_Core_Page {
  function run() {
			
		CRM_Utils_System::setTitle(ts('Translation'));
		
		$url = CRM_Utils_System::url() . "civicrm/ctrl/translation";
		$this->assign('url', $url);		
		
		$content = "<div>". ts('Translation from php') ."</div>";
		$this-> assign('content', $content);
		
		parent::run();
  }
}
