from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time
import unittest

class TestLogin(unittest.TestCase):

    def setUp(self):
        service = Service('./selenium/chromedriver.exe')
        self.driver = webdriver.Chrome(service=service)
        self.driver.get('https://www.saucedemo.com/v1/index.html')

    def tearDown(self):
        self.driver.quit()

    def test_login_valido(self):
        self.login('standard_user', 'secret_sauce')

    def test_login_invalido(self):
        self.login('standard_user', 'senha_errada')
        time.sleep(1)
        error = self.driver.find_element(By.CSS_SELECTOR, '[data-test="error"]').text
        self.assertEqual(error, 'Epic sadface: Username and password do not match any user in this service')

    def test_login_locked_out_user(self):
        self.login('locked_out_user', 'secret_sauce')
        time.sleep(1)
        error = self.driver.find_element(By.CSS_SELECTOR, '[data-test="error"]').text
        self.assertEqual(error, 'Epic sadface: Sorry, this user has been locked out.')

    def test_login_problem_user(self):
        self.login('problem_user', 'secret_sauce')
        time.sleep(1)
        # Você pode adicionar verificações específicas aqui se necessário

    def test_login_performance_glitch_user(self):
        self.login('performance_glitch_user', 'secret_sauce')
        time.sleep(1)
        # Também pode verificar algo aqui após o login

    def test_login_usuario_vazio(self):
        self.driver.find_element(By.ID, 'login-button').click()
        time.sleep(1)
        error = self.driver.find_element(By.CSS_SELECTOR, '[data-test="error"]').text
        self.assertEqual(error, 'Epic sadface: Username is required')

    def test_login_senha_vazia(self):
        self.driver.find_element(By.CSS_SELECTOR, '[data-test="username"]').send_keys('standard_user')
        self.driver.find_element(By.ID, 'login-button').click()
        time.sleep(1)
        error = self.driver.find_element(By.CSS_SELECTOR, '[data-test="error"]').text
        self.assertEqual(error, 'Epic sadface: Password is required')

    def test_login_usuario_vazio_com_senha(self):
        self.driver.find_element(By.CSS_SELECTOR, '[data-test="password"]').send_keys('secret_sauce')
        self.driver.find_element(By.ID, 'login-button').click()
        time.sleep(1)
        error = self.driver.find_element(By.CSS_SELECTOR, '[data-test="error"]').text
        self.assertEqual(error, 'Epic sadface: Username is required')

    def login(self, username, password):
        self.driver.find_element(By.CSS_SELECTOR, '[data-test="username"]').send_keys(username)
        self.driver.find_element(By.CSS_SELECTOR, '[data-test="password"]').send_keys(password)
        self.driver.find_element(By.ID, 'login-button').click()

if __name__ == "__main__":
    unittest.main()
